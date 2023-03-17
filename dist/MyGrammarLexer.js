"use strict";
// Generated from /Users/pippo/github/Taswell/src/MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyGrammarLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class MyGrammarLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return MyGrammarLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(MyGrammarLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "MyGrammar.g4"; }
    // @Override
    get ruleNames() { return MyGrammarLexer.ruleNames; }
    // @Override
    get serializedATN() { return MyGrammarLexer._serializedATN; }
    // @Override
    get channelNames() { return MyGrammarLexer.channelNames; }
    // @Override
    get modeNames() { return MyGrammarLexer.modeNames; }
    static get _ATN() {
        if (!MyGrammarLexer.__ATN) {
            MyGrammarLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarLexer._serializedATN));
        }
        return MyGrammarLexer.__ATN;
    }
}
MyGrammarLexer.T__0 = 1;
// tslint:disable:no-trailing-whitespace
MyGrammarLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
MyGrammarLexer.modeNames = [
    "DEFAULT_MODE",
];
MyGrammarLexer.ruleNames = [
    "T__0",
];
MyGrammarLexer._LITERAL_NAMES = [
    undefined, "'program'",
];
MyGrammarLexer._SYMBOLIC_NAMES = [];
MyGrammarLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(MyGrammarLexer._LITERAL_NAMES, MyGrammarLexer._SYMBOLIC_NAMES, []);
MyGrammarLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x03\r\b\x01\x04" +
    "\x02\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
    "\x02\x02\x02\x02\x03\x03\x02\x03\x03\x02\x02\x02\f\x02\x03\x03\x02\x02" +
    "\x02\x03\x05\x03\x02\x02\x02\x05\x06\x07r\x02\x02\x06\x07\x07t\x02\x02" +
    "\x07\b\x07q\x02\x02\b\t\x07i\x02\x02\t\n\x07t\x02\x02\n\v\x07c\x02\x02" +
    "\v\f\x07o\x02\x02\f\x04\x03\x02\x02\x02\x03\x02\x02";
exports.MyGrammarLexer = MyGrammarLexer;
