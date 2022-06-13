
import Moment from 'moment'

export const toTitle = (str: string): string => {
    if (str.length === 0) return '';
  
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

export const toCamelCase = (str: string): string => {
    if (str == null) return '';

    const words = str.replaceAll(' ', '_').split('_');
    const formatted = words.map(toTitle).join();

    if (formatted.length === 0) return '';

    return formatted[0].toLowerCase() + formatted.substring(1);
}

export const abbreviatedDate = (str: string) => {
    return Moment(str).format('MMM. DD, YYYY');
}