import { translate } from '@vitalets/google-translate-api';

const translateText = async (text, { from, to, options }) => {
    return await translate(text, { from: from, to: to, fetchOptions:options},)
}

export { translateText }