  import { CharStreams, CommonTokenStream } from 'antlr4ts';
  import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
  import { ParseTree } from 'antlr4ts/tree/ParseTree';
  import { RuleNode } from 'antlr4ts/tree/RuleNode';
  import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
  import { MyGrammarLexer } from './MyGrammarLexer';
  import { CompilationUnitContext, FunctionDeclarationContext, MyGrammarParser } from './MyGrammarParser';
  import { MyGrammarVisitor } from './MyGrammarVisitor';

  const input = CharStreams.fromString("fn add(x: number, y: number) {return x + y;} program");
  const lexer = new MyGrammarLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MyGrammarParser(tokens);
  const tree = parser.compilationUnit();

  class MyVisitor implements MyGrammarVisitor<string> {
    visitCompilationUnit(ctx: CompilationUnitContext): string {
      return `Found compilation unit: ${ctx.text}`;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): string {
      return `Found function declaration: ${ctx.identifier().text}`;
    }
    
    visit(tree: ParseTree): string {
      throw new Error('Method not implemented.');
    }

    visitChildren(node: RuleNode): string {
      throw new Error('Method not implemented.');
    }

    visitTerminal(node: TerminalNode): string {
      throw new Error('Method not implemented.');
    }

    visitErrorNode(node: ErrorNode): string {
      throw new Error('Method not implemented.');
    }
  }

  const visitor = new MyVisitor();
  console.log(visitor.visit(tree));
