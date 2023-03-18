// Generated from MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyGrammarListener } from "./MyGrammarListener";

export class MyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly IntegerLiteral = 6;
	public static readonly WS = 7;
	public static readonly COMMA = 8;
	public static readonly SEMI = 9;
	public static readonly LPAREN = 10;
	public static readonly RPAREN = 11;
	public static readonly LBRACE = 12;
	public static readonly RBRACE = 13;
	public static readonly PLUS = 14;
	public static readonly MINUS = 15;
	public static readonly STAR = 16;
	public static readonly SLASH = 17;
	public static readonly MOD = 18;
	public static readonly EQUALS = 19;
	public static readonly LT = 20;
	public static readonly GT = 21;
	public static readonly LEQ = 22;
	public static readonly GEQ = 23;
	public static readonly NEQ = 24;
	public static readonly EQEQ = 25;
	public static readonly LETTER = 26;
	public static readonly DIGIT = 27;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_functionDeclaration = 1;
	public static readonly RULE_parameterList = 2;
	public static readonly RULE_parameter = 3;
	public static readonly RULE_blockStatement = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_expressionStatement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_atom = 8;
	public static readonly RULE_identifier = 9;
	public static readonly RULE_type = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "functionDeclaration", "parameterList", "parameter", 
		"blockStatement", "statement", "expressionStatement", "expression", "atom", 
		"identifier", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'program'", "'fn'", "':'", "'_'", "'int'", undefined, undefined, 
		"','", "';'", "'('", "')'", "'{'", "'}'", "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'='", "'<'", "'>'", "'<='", "'>='", "'!='", "'=='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "IntegerLiteral", 
		"WS", "COMMA", "SEMI", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "PLUS", 
		"MINUS", "STAR", "SLASH", "MOD", "EQUALS", "LT", "GT", "LEQ", "GEQ", "NEQ", 
		"EQEQ", "LETTER", "DIGIT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyGrammarParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__1) {
				{
				{
				this.state = 22;
				this.functionDeclaration();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this.match(MyGrammarParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MyGrammarParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.match(MyGrammarParser.T__1);
			this.state = 31;
			this.identifier();
			this.state = 32;
			this.match(MyGrammarParser.LPAREN);
			this.state = 33;
			this.parameterList();
			this.state = 34;
			this.match(MyGrammarParser.RPAREN);
			this.state = 35;
			this.blockStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MyGrammarParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyGrammarParser.T__3 || _la === MyGrammarParser.LETTER) {
				{
				this.state = 37;
				this.parameter();
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MyGrammarParser.COMMA) {
					{
					{
					this.state = 38;
					this.match(MyGrammarParser.COMMA);
					this.state = 39;
					this.parameter();
					}
					}
					this.state = 44;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MyGrammarParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.identifier();
			this.state = 48;
			this.match(MyGrammarParser.T__2);
			this.state = 49;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MyGrammarParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(MyGrammarParser.LBRACE);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__3) | (1 << MyGrammarParser.IntegerLiteral) | (1 << MyGrammarParser.LETTER))) !== 0)) {
				{
				{
				this.state = 52;
				this.statement();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
			this.match(MyGrammarParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MyGrammarParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.expressionStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MyGrammarParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.expression(0);
			this.state = 63;
			this.match(MyGrammarParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, MyGrammarParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 66;
			this.atom();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 103;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 101;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 68;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 69;
						this.match(MyGrammarParser.PLUS);
						this.state = 70;
						this.atom();
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 71;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 72;
						this.match(MyGrammarParser.MINUS);
						this.state = 73;
						this.atom();
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 74;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 75;
						this.match(MyGrammarParser.STAR);
						this.state = 76;
						this.atom();
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 78;
						this.match(MyGrammarParser.SLASH);
						this.state = 79;
						this.atom();
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 80;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 81;
						this.match(MyGrammarParser.MOD);
						this.state = 82;
						this.atom();
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 84;
						this.match(MyGrammarParser.LT);
						this.state = 85;
						this.atom();
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 86;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 87;
						this.match(MyGrammarParser.GT);
						this.state = 88;
						this.atom();
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 89;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 90;
						this.match(MyGrammarParser.LEQ);
						this.state = 91;
						this.atom();
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 93;
						this.match(MyGrammarParser.GEQ);
						this.state = 94;
						this.atom();
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 95;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 96;
						this.match(MyGrammarParser.NEQ);
						this.state = 97;
						this.atom();
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 99;
						this.match(MyGrammarParser.EQEQ);
						this.state = 100;
						this.atom();
						}
						break;
					}
					}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MyGrammarParser.RULE_atom);
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.T__3:
			case MyGrammarParser.LETTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.identifier();
				}
				break;
			case MyGrammarParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.match(MyGrammarParser.IntegerLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MyGrammarParser.RULE_identifier);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if (!(_la === MyGrammarParser.T__3 || _la === MyGrammarParser.LETTER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 114;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 111;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__3) | (1 << MyGrammarParser.LETTER) | (1 << MyGrammarParser.DIGIT))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MyGrammarParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(MyGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 4);

		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1Dz\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04+" +
		"\n\x04\f\x04\x0E\x04.\v\x04\x05\x040\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x07\x068\n\x06\f\x06\x0E\x06;\v\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\th\n\t\f\t\x0E\tk\v\t\x03\n" +
		"\x03\n\x05\no\n\n\x03\v\x03\v\x07\vs\n\v\f\v\x0E\vv\v\v\x03\f\x03\f\x03" +
		"\f\x02\x02\x03\x10\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x02\x04\x04\x02\x06\x06\x1C\x1C\x04\x02" +
		"\x06\x06\x1C\x1D\x02\x7F\x02\x1B\x03\x02\x02\x02\x04 \x03\x02\x02\x02" +
		"\x06/\x03\x02\x02\x02\b1\x03\x02\x02\x02\n5\x03\x02\x02\x02\f>\x03\x02" +
		"\x02\x02\x0E@\x03\x02\x02\x02\x10C\x03\x02\x02\x02\x12n\x03\x02\x02\x02" +
		"\x14p\x03\x02\x02\x02\x16w\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19" +
		"\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B" +
		"\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E" +
		"\x1F\x07\x03\x02\x02\x1F\x03\x03\x02\x02\x02 !\x07\x04\x02\x02!\"\x05" +
		"\x14\v\x02\"#\x07\f\x02\x02#$\x05\x06\x04\x02$%\x07\r\x02\x02%&\x05\n" +
		"\x06\x02&\x05\x03\x02\x02\x02\',\x05\b\x05\x02()\x07\n\x02\x02)+\x05\b" +
		"\x05\x02*(\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02" +
		"\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02/\'\x03\x02\x02\x02/0\x03" +
		"\x02\x02\x020\x07\x03\x02\x02\x0212\x05\x14\v\x0223\x07\x05\x02\x0234" +
		"\x05\x16\f\x024\t\x03\x02\x02\x0259\x07\x0E\x02\x0268\x05\f\x07\x0276" +
		"\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":<\x03\x02\x02\x02;9\x03\x02\x02\x02<=\x07\x0F\x02\x02=\v\x03\x02\x02" +
		"\x02>?\x05\x0E\b\x02?\r\x03\x02\x02\x02@A\x05\x10\t\x02AB\x07\v\x02\x02" +
		"B\x0F\x03\x02\x02\x02CD\b\t\x01\x02DE\x05\x12\n\x02Ei\x03\x02\x02\x02" +
		"FG\f\r\x02\x02GH\x07\x10\x02\x02Hh\x05\x12\n\x02IJ\f\f\x02\x02JK\x07\x11" +
		"\x02\x02Kh\x05\x12\n\x02LM\f\v\x02\x02MN\x07\x12\x02\x02Nh\x05\x12\n\x02" +
		"OP\f\n\x02\x02PQ\x07\x13\x02\x02Qh\x05\x12\n\x02RS\f\t\x02\x02ST\x07\x14" +
		"\x02\x02Th\x05\x12\n\x02UV\f\b\x02\x02VW\x07\x16\x02\x02Wh\x05\x12\n\x02" +
		"XY\f\x07\x02\x02YZ\x07\x17\x02\x02Zh\x05\x12\n\x02[\\\f\x06\x02\x02\\" +
		"]\x07\x18\x02\x02]h\x05\x12\n\x02^_\f\x05\x02\x02_`\x07\x19\x02\x02`h" +
		"\x05\x12\n\x02ab\f\x04\x02\x02bc\x07\x1A\x02\x02ch\x05\x12\n\x02de\f\x03" +
		"\x02\x02ef\x07\x1B\x02\x02fh\x05\x12\n\x02gF\x03\x02\x02\x02gI\x03\x02" +
		"\x02\x02gL\x03\x02\x02\x02gO\x03\x02\x02\x02gR\x03\x02\x02\x02gU\x03\x02" +
		"\x02\x02gX\x03\x02\x02\x02g[\x03\x02\x02\x02g^\x03\x02\x02\x02ga\x03\x02" +
		"\x02\x02gd\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02" +
		"\x02\x02j\x11\x03\x02\x02\x02ki\x03\x02\x02\x02lo\x05\x14\v\x02mo\x07" +
		"\b\x02\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02o\x13\x03\x02\x02\x02pt" +
		"\t\x02\x02\x02qs\t\x03\x02\x02rq\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03" +
		"\x02\x02\x02tu\x03\x02\x02\x02u\x15\x03\x02\x02\x02vt\x03\x02\x02\x02" +
		"wx\x07\x07\x02\x02x\x17\x03\x02\x02\x02\n\x1B,/9gint";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public functionDeclaration(): FunctionDeclarationContext[];
	public functionDeclaration(i: number): FunctionDeclarationContext;
	public functionDeclaration(i?: number): FunctionDeclarationContext | FunctionDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclarationContext);
		} else {
			return this.getRuleContext(i, FunctionDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(MyGrammarParser.LPAREN, 0); }
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MyGrammarParser.RPAREN, 0); }
	public blockStatement(): BlockStatementContext {
		return this.getRuleContext(0, BlockStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MyGrammarParser.COMMA);
		} else {
			return this.getToken(MyGrammarParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_parameter; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MyGrammarParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(MyGrammarParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext {
		return this.getRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(MyGrammarParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.MINUS, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.SLASH, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.MOD, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.GT, 0); }
	public LEQ(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.LEQ, 0); }
	public GEQ(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.GEQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.NEQ, 0); }
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.EQEQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_expression; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_atom; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MyGrammarParser.LETTER);
		} else {
			return this.getToken(MyGrammarParser.LETTER, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MyGrammarParser.DIGIT);
		} else {
			return this.getToken(MyGrammarParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_identifier; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_type; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


