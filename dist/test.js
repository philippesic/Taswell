"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const MyGrammarLexer_1 = require("./MyGrammarLexer");
const MyGrammarParser_1 = require("./MyGrammarParser");
const input = antlr4ts_1.CharStreams.fromString("let x: number = 42;");
const lexer = new MyGrammarLexer_1.MyGrammarLexer(input);
const tokens = new antlr4ts_1.CommonTokenStream(lexer);
const parser = new MyGrammarParser_1.MyGrammarParser(tokens);
const tree = parser.compilationUnit();
class MyVisitor {
    visit(tree) {
        throw new Error('Method not implemented.');
    }
    visitChildren(node) {
        throw new Error('Method not implemented.');
    }
    visitTerminal(node) {
        throw new Error('Method not implemented.');
    }
    visitErrorNode(node) {
        throw new Error('Method not implemented.');
    }
    visitFunctionDeclaration(ctx) {
        return `Found function declaration: ${ctx.functionKeyword().text}`;
    }
}
const visitor = new MyVisitor();
console.log(visitor.visit(tree));
