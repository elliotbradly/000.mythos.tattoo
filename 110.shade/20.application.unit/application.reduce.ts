import * as clone from "clone-deep";
import * as Act from "./application.action";
import { ApplicationModel } from "./application.model";
import * as Buzz from "./application.buzzer";
import State from "../99.core/state";

export function reducer(model: ApplicationModel = new ApplicationModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_APPLICATION:
            return Buzz.updateApplication(clone(model), act.bale, state);

        case Act.INIT_APPLICATION:
            return Buzz.initApplication(clone(model), act.bale, state);

        case Act.READ_APPLICATION:
            return Buzz.readApplication(clone(model), act.bale, state);

        case Act.WRITE_APPLICATION:
            return Buzz.writeApplication(clone(model), act.bale, state);

        case Act.REMOVE_APPLICATION:
            return Buzz.removeApplication(clone(model), act.bale, state);

        case Act.DELETE_APPLICATION:
            return Buzz.deleteApplication(clone(model), act.bale, state);

        case Act.CREATE_APPLICATION:
            return Buzz.createApplication(clone(model), act.bale, state);

case Act.TEST_APPLICATION:
 return Buzz.testApplication(clone(model), act.bale, state);
 
        default:
            return model;
    }
}