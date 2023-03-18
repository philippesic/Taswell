// Generated from MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./MyGrammarParser";
import { FunctionDeclarationContext } from "./MyGrammarParser";
import { BlockStatementContext } from "./MyGrammarParser";
import { StatementContext } from "./MyGrammarParser";
import { DeclarationStatementContext } from "./MyGrammarParser";
import { ExpressionStatementContext } from "./MyGrammarParser";
import { ExpressionContext } from "./MyGrammarParser";
import { PrimaryExpressionContext } from "./MyGrammarParser";
import { LiteralContext } from "./MyGrammarParser";
import { ParameterListContext } from "./MyGrammarParser";
import { ParameterContext } from "./MyGrammarParser";
import { TypeContext } from "./MyGrammarParser";
import { IdentifierContext } from "./MyGrammarParser";
import { BinaryOperatorContext } from "./MyGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export interface MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	enterBinaryOperator?: (ctx: BinaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.binaryOperator`.
	 * @param ctx the parse tree
	 */
	exitBinaryOperator?: (ctx: BinaryOperatorContext) => void;
}

