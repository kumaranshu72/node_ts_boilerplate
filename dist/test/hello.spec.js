var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import app from "../app";
import "mocha";
import { expect } from 'chai';
describe("Hello API Request", () => {
    it("should return response on call", () => __awaiter(this, void 0, void 0, function* () {
        let response = yield request(app).get(`/`);
        expect(response).to.have.status(200);
    }));
});
//# sourceMappingURL=hello.spec.js.map