import { AppError } from "./../../utils";
import { States } from "./../States/statesModel";
import { AddTerminal } from "./terminalInterface";
import { Terminals } from "./terminalsModel";
import { Lga } from "../Lga";
export class TerminalsService {
    public getTerminals = async () => {
        return await Terminals.find();
    }

    public addTerminal = async (terminalData: AddTerminal) => {
        const state = await States.findOneOrFail({ id: terminalData.stateId })
            .catch(() => {
                throw new AppError("Invalid state selected!");
            });

        const lga = await Lga.findOneOrFail({
            where: [
                { stateId: state.id, id: terminalData.lgaId },
            ],
        }).catch((err) => {
            throw new AppError("Selected LGA does not match the selected State!", err);
        });

        const terminal = Terminals.create(terminalData);
        terminal.state = state;
        terminal.lga = lga;
        return await terminal.save();
    }
}
