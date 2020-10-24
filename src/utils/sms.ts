import { logger } from "./logger";
import twilio from "twilio";
import { TWILIO_SID, TWILIO_TOKEN, SMS_FROM, SMS_RETRIEVE_TOKEN } from "./../config";

/**
 * Sends SMS to a given `to` phonenumber
 *
 * @export
 * @param {string} to
 * @param {string} body
 * @param {*} [from=SMS_FROM]
 * @returns
 */
export async function sendSms(to: string, body: string,  includeHash = true, from: string = SMS_FROM) {
    const accountSid = TWILIO_SID;
    const authToken = TWILIO_TOKEN;
    const client = twilio(accountSid, authToken);

    try {
        let message = body;
        if (includeHash) {
            message = `${body}

            ${SMS_RETRIEVE_TOKEN}
            `;
        }
        const res = await client.messages.create({ body: message, from, to });
        return res;
    } catch (error) {
        logger.error(`SMS ERROR: ${error.message}`);
    }
}
