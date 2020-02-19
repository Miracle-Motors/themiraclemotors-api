import { PAYSTACK_SECRET_KEY } from "./../../config";
import { PaystackVerificationResponse } from "./paymentsInterface";
import { httpReq } from "../../utils";

export class PaymentsService {
    public async verifyPayment(transactionRef: string) {
        return await httpReq<PaystackVerificationResponse>(
            `https://api.paystack.co/transaction/verify/${transactionRef}`,
            {
                method: "get",
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                },
            },
        );
    }
}
