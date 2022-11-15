import config from './package.json';
export const STACK_NAME = `${process.env.ENV || 'dev'}-${config.name}`;
export const NOTES_API = `${STACK_NAME}-NOTES_API`;
export const NOTES_TABLE = `${STACK_NAME}-NOTES_TABLE`;
export const APP_BUCKET = `${STACK_NAME}-APP_BUCKET`;
export const DISTRIBUTION = `${STACK_NAME}-DISTRIBUTION`;
export const APP_WEBSITE = `${STACK_NAME}-APP_WEBSITE`;
export const NOTES_API_RESOURCE = `${STACK_NAME}-NOTES_API_RESOURCE`;
