import { AppError } from "./../../utils";
import { States } from "./../States/statesModel";
import { AddTerminal } from "./terminalInterface";
import { Terminals } from "./terminalsModel";
import { Lga } from "../Lga";
import { HttpStatusCode } from "../../enums";

export class TerminalsService {
    public getTerminals = async ({ page, limit }) => {
        return await Terminals.findAndCount({ current: page, size: limit });
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

    public updateTerminal = async (terminalId: string, terminalData: AddTerminal) => {

        const terminal = await Terminals.findOneOrFail({ id: terminalId })
            .catch(() => {
                throw new AppError("Selected terminal does not exist!", null, HttpStatusCode.NOT_FOUND);
            });

        if (terminalData.stateId) {
            terminal.state = await States.findOneOrFail({ id: terminalData.stateId })
                .catch(() => {
                    throw new AppError("Invalid state selected!", null, HttpStatusCode.NOT_FOUND);
                });

        }

        if (terminalData.lgaId) {
            terminal.lga = await Lga.findOneOrFail({
                where: [
                    { stateId: terminal.state.id, id: terminalData.lgaId },
                ],
            }).catch((err) => {
                throw new AppError("Selected LGA does not match the selected State!", null, HttpStatusCode.NOT_FOUND);
            });
        }

        terminal.name = terminalData.name || terminal.name;

        return await terminal.save();
    }

    public deleteTerminal = async (terminalId: string) => {

        const terminal = await Terminals.findOneOrFail({ id: terminalId })
            .catch(() => {
                throw new AppError("Selected terminal does not exist!", null, HttpStatusCode.NOT_FOUND);
            });

        await Terminals.getRepository().softDelete({ id: terminal.id });
        return terminal;
    }
}
