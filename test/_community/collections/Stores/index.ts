import type { CollectionConfig } from 'payload'

export const Stores: CollectionConfig = {
  slug: 'stores',
  labels: {
    singular: {
      sv: 'Butik',
      en: 'Store',
    },
    plural: {
      sv: 'Butiker',
      en: 'Stores',
    },
  },
  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: {
            sv: 'Namn',
            en: 'Name',
          },
          required: true,
          index: true,
        },
        {
          name: 'api_url',
          type: 'text',
          label: {
            sv: 'API URL',
            en: 'API URL',
          },
          required: true,
        },
      ],
    },
    {
      name: 'api_key_env_var',
      type: 'text',
      label: {
        sv: 'API Nyckel Miljövariabel',
        en: 'API Key Environment Variable',
      },
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
}
