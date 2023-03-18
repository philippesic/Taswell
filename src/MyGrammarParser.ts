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
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly INT = 9;
	public static readonly FLOAT = 10;
	public static readonly STRING = 11;
	public static readonly PLUS = 12;
	public static readonly MINUS = 13;
	public static readonly STAR = 14;
	public static readonly SLASH = 15;
	public static readonly EQ = 16;
	public static readonly SEMI = 17;
	public static readonly LPAREN = 18;
	public static readonly RPAREN = 19;
	public static readonly LBRACE = 20;
	public static readonly RBRACE = 21;
	public static readonly COMMA = 22;
	public static readonly WS = 23;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_functionDeclaration = 1;
	public static readonly RULE_blockStatement = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_declarationStatement = 4;
	public static readonly RULE_expressionStatement = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_primaryExpression = 7;
	public static readonly RULE_literal = 8;
	public static readonly RULE_parameterList = 9;
	public static readonly RULE_parameter = 10;
	public static readonly RULE_type = 11;
	public static readonly RULE_identifier = 12;
	public static readonly RULE_binaryOperator = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "functionDeclaration", "blockStatement", "statement", 
		"declarationStatement", "expressionStatement", "expression", "primaryExpression", 
		"literal", "parameterList", "parameter", "type", "identifier", "binaryOperator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'fn'", "'func'", "':'", "'let'", "'int'", "'float'", "'string'", 
		"'[a-zA-Z_][a-zA-Z0-9_]'", undefined, undefined, undefined, "'+'", "'-'", 
		"'*'", "'/'", "'='", "';'", "'('", "')'", "'{'", "'}'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "INT", "FLOAT", "STRING", "PLUS", "MINUS", "STAR", 
		"SLASH", "EQ", "SEMI", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COMMA", 
		"WS",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__0 || _la === MyGrammarParser.T__1) {
				{
				{
				this.state = 28;
				this.functionDeclaration();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this.match(MyGrammarParser.EOF);
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
		let _la: number;
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.match(MyGrammarParser.T__0);
				}
				break;
			case MyGrammarParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.match(MyGrammarParser.T__1);
				this.state = 38;
				this.identifier();
				this.state = 39;
				this.match(MyGrammarParser.LPAREN);
				this.state = 41;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 40;
					this.parameterList();
					}
					break;
				}
				this.state = 43;
				this.match(MyGrammarParser.RPAREN);
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MyGrammarParser.T__2) {
					{
					this.state = 44;
					this.match(MyGrammarParser.T__2);
					this.state = 45;
					this.type();
					}
				}

				this.state = 48;
				this.blockStatement();
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
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MyGrammarParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(MyGrammarParser.LBRACE);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__2) | (1 << MyGrammarParser.T__3) | (1 << MyGrammarParser.T__7) | (1 << MyGrammarParser.INT) | (1 << MyGrammarParser.FLOAT) | (1 << MyGrammarParser.STRING) | (1 << MyGrammarParser.PLUS) | (1 << MyGrammarParser.MINUS) | (1 << MyGrammarParser.STAR) | (1 << MyGrammarParser.SLASH) | (1 << MyGrammarParser.SEMI) | (1 << MyGrammarParser.LPAREN) | (1 << MyGrammarParser.RPAREN))) !== 0)) {
				{
				{
				this.state = 53;
				this.statement();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
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
		this.enterRule(_localctx, 6, MyGrammarParser.RULE_statement);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.declarationStatement();
				}
				break;
			case MyGrammarParser.T__2:
			case MyGrammarParser.T__7:
			case MyGrammarParser.INT:
			case MyGrammarParser.FLOAT:
			case MyGrammarParser.STRING:
			case MyGrammarParser.PLUS:
			case MyGrammarParser.MINUS:
			case MyGrammarParser.STAR:
			case MyGrammarParser.SLASH:
			case MyGrammarParser.SEMI:
			case MyGrammarParser.LPAREN:
			case MyGrammarParser.RPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.expressionStatement();
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
	public declarationStatement(): DeclarationStatementContext {
		let _localctx: DeclarationStatementContext = new DeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MyGrammarParser.RULE_declarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(MyGrammarParser.T__3);
			this.state = 66;
			this.identifier();
			this.state = 67;
			this.match(MyGrammarParser.T__2);
			this.state = 68;
			this.type();
			this.state = 69;
			this.match(MyGrammarParser.EQ);
			this.state = 70;
			this.expression();
			this.state = 71;
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
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MyGrammarParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.expression();
			this.state = 74;
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
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MyGrammarParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.primaryExpression();
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.PLUS) | (1 << MyGrammarParser.MINUS) | (1 << MyGrammarParser.STAR) | (1 << MyGrammarParser.SLASH))) !== 0)) {
				{
				{
				this.state = 77;
				this.binaryOperator();
				this.state = 78;
				this.primaryExpression();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MyGrammarParser.RULE_primaryExpression);
		try {
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.match(MyGrammarParser.LPAREN);
				this.state = 88;
				this.expression();
				this.state = 89;
				this.match(MyGrammarParser.RPAREN);
				}
				break;
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MyGrammarParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.INT) | (1 << MyGrammarParser.FLOAT) | (1 << MyGrammarParser.STRING))) !== 0))) {
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
		this.enterRule(_localctx, 18, MyGrammarParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.parameter();
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.COMMA) {
				{
				{
				this.state = 96;
				this.match(MyGrammarParser.COMMA);
				this.state = 97;
				this.parameter();
				}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
		this.enterRule(_localctx, 20, MyGrammarParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.identifier();
			this.state = 104;
			this.match(MyGrammarParser.T__2);
			this.state = 105;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MyGrammarParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.T__4) | (1 << MyGrammarParser.T__5) | (1 << MyGrammarParser.T__6))) !== 0))) {
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
		this.enterRule(_localctx, 24, MyGrammarParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__7) {
				{
				{
				this.state = 109;
				this.match(MyGrammarParser.T__7);
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MyGrammarParser.RULE_binaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyGrammarParser.PLUS) | (1 << MyGrammarParser.MINUS) | (1 << MyGrammarParser.STAR) | (1 << MyGrammarParser.SLASH))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19x\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03,\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x031\n\x03\x03\x03\x03\x03\x05\x035\n\x03\x03" +
		"\x04\x03\x04\x07\x049\n\x04\f\x04\x0E\x04<\v\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x05\x05B\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b" +
		"S\n\b\f\b\x0E\bV\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t^\n\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x07\ve\n\v\f\v\x0E\vh\v\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\x0E\x07\x0Eq\n\x0E\f\x0E\x0E\x0Et\v\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02" +
		"\x05\x03\x02\v\r\x03\x02\x07\t\x03\x02\x0E\x11\x02t\x02!\x03\x02\x02\x02" +
		"\x044\x03\x02\x02\x02\x066\x03\x02\x02\x02\bA\x03\x02\x02\x02\nC\x03\x02" +
		"\x02\x02\fK\x03\x02\x02\x02\x0EN\x03\x02\x02\x02\x10]\x03\x02\x02\x02" +
		"\x12_\x03\x02\x02\x02\x14a\x03\x02\x02\x02\x16i\x03\x02\x02\x02\x18m\x03" +
		"\x02\x02\x02\x1Ar\x03\x02\x02\x02\x1Cu\x03\x02\x02\x02\x1E \x05\x04\x03" +
		"\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"" +
		"\x03\x02\x02\x02\"$\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x07\x02\x02\x03" +
		"%\x03\x03\x02\x02\x02&5\x07\x03\x02\x02\'(\x07\x04\x02\x02()\x05\x1A\x0E" +
		"\x02)+\x07\x14\x02\x02*,\x05\x14\v\x02+*\x03\x02\x02\x02+,\x03\x02\x02" +
		"\x02,-\x03\x02\x02\x02-0\x07\x15\x02\x02./\x07\x05\x02\x02/1\x05\x18\r" +
		"\x020.\x03\x02\x02\x0201\x03\x02\x02\x0212\x03\x02\x02\x0223\x05\x06\x04" +
		"\x0235\x03\x02\x02\x024&\x03\x02\x02\x024\'\x03\x02\x02\x025\x05\x03\x02" +
		"\x02\x026:\x07\x16\x02\x0279\x05\b\x05\x0287\x03\x02\x02\x029<\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02" +
		"\x02\x02=>\x07\x17\x02\x02>\x07\x03\x02\x02\x02?B\x05\n\x06\x02@B\x05" +
		"\f\x07\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02B\t\x03\x02\x02\x02CD\x07" +
		"\x06\x02\x02DE\x05\x1A\x0E\x02EF\x07\x05\x02\x02FG\x05\x18\r\x02GH\x07" +
		"\x12\x02\x02HI\x05\x0E\b\x02IJ\x07\x13\x02\x02J\v\x03\x02\x02\x02KL\x05" +
		"\x0E\b\x02LM\x07\x13\x02\x02M\r\x03\x02\x02\x02NT\x05\x10\t\x02OP\x05" +
		"\x1C\x0F\x02PQ\x05\x10\t\x02QS\x03\x02\x02\x02RO\x03\x02\x02\x02SV\x03" +
		"\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02U\x0F\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02W^\x05\x12\n\x02X^\x05\x1A\x0E\x02YZ\x07\x14\x02\x02" +
		"Z[\x05\x0E\b\x02[\\\x07\x15\x02\x02\\^\x03\x02\x02\x02]W\x03\x02\x02\x02" +
		"]X\x03\x02\x02\x02]Y\x03\x02\x02\x02^\x11\x03\x02\x02\x02_`\t\x02\x02" +
		"\x02`\x13\x03\x02\x02\x02af\x05\x16\f\x02bc\x07\x18\x02\x02ce\x05\x16" +
		"\f\x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02" +
		"\x02\x02g\x15\x03\x02\x02\x02hf\x03\x02\x02\x02ij\x05\x1A\x0E\x02jk\x07" +
		"\x05\x02\x02kl\x05\x18\r\x02l\x17\x03\x02\x02\x02mn\t\x03\x02\x02n\x19" +
		"\x03\x02\x02\x02oq\x07\n\x02\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02r" +
		"p\x03\x02\x02\x02rs\x03\x02\x02\x02s\x1B\x03\x02\x02\x02tr\x03\x02\x02" +
		"\x02uv\t\x04\x02\x02v\x1D\x03\x02\x02\x02\f!+04:AT]fr";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MyGrammarParser.EOF, 0); }
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
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.RPAREN, 0); }
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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
	public declarationStatement(): DeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
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


export class DeclarationStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public EQ(): TerminalNode { return this.getToken(MyGrammarParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(MyGrammarParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_declarationStatement; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
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
	public primaryExpression(): PrimaryExpressionContext[];
	public primaryExpression(i: number): PrimaryExpressionContext;
	public primaryExpression(i?: number): PrimaryExpressionContext | PrimaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryExpressionContext);
		} else {
			return this.getRuleContext(i, PrimaryExpressionContext);
		}
	}
	public binaryOperator(): BinaryOperatorContext[];
	public binaryOperator(i: number): BinaryOperatorContext;
	public binaryOperator(i?: number): BinaryOperatorContext | BinaryOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BinaryOperatorContext);
		} else {
			return this.getRuleContext(i, BinaryOperatorContext);
		}
	}
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


export class PrimaryExpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_literal; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
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


export class IdentifierContext extends ParserRuleContext {
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


export class BinaryOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.MINUS, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.SLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
}


