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
exports.CompilationUnitContext = exports.MyGrammarParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class MyGrammarParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return MyGrammarParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "MyGrammar.g4"; }
    // @Override
    get ruleNames() { return MyGrammarParser.ruleNames; }
    // @Override
    get serializedATN() { return MyGrammarParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(MyGrammarParser._ATN, this);
    }
    // @RuleVersion(0)
    compilationUnit() {
        let _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, MyGrammarParser.RULE_compilationUnit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2;
                this.match(MyGrammarParser.T__0);
                this.state = 3;
                this.match(MyGrammarParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!MyGrammarParser.__ATN) {
            MyGrammarParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
        }
        return MyGrammarParser.__ATN;
    }
}
MyGrammarParser.T__0 = 1;
MyGrammarParser.RULE_compilationUnit = 0;
// tslint:disable:no-trailing-whitespace
MyGrammarParser.ruleNames = [
    "compilationUnit",
];
MyGrammarParser._LITERAL_NAMES = [
    undefined, "'program'",
];
MyGrammarParser._SYMBOLIC_NAMES = [];
MyGrammarParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);
MyGrammarParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x03\b\x04\x02" +
    "\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x02\x02\x02\x03\x02\x02\x02\x02" +
    "\x02\x06\x02\x04\x03\x02\x02\x02\x04\x05\x07\x03\x02\x02\x05\x06\x07\x02" +
    "\x02\x03\x06\x03\x03\x02\x02\x02\x02";
exports.MyGrammarParser = MyGrammarParser;
class CompilationUnitContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(MyGrammarParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return MyGrammarParser.RULE_compilationUnit; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompilationUnitContext = CompilationUnitContext;
