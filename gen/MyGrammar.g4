grammar MyGrammar;

// Importing the TypeScript lexer and parser
import TypeScriptLexer;
import TypeScriptParser;

// Lexer rules
lexer grammar MyGrammarLexer;

FUNCTION: 'fn' | 'func';
LET: 'let';
TYPE: 'int' | 'float' | 'string' | 'boolean';

// Parser rules
compilationUnit: functionDeclaration* 'program' EOF;

functionDeclaration: FUNCTION identifier '(' formalParameters ')' functionBody;

formalParameters: identifier ':' TYPE (',' identifier ':' TYPE)*;

functionBody: '{' statement* 'return' expression ';' '}';

statement: variableDeclaration | assignmentStatement | functionCall | ifStatement | whileStatement;

variableDeclaration: LET identifier TYPE (assignmentOperator expression)?;

assignmentStatement: assignmentTarget assignmentOperator expression ';';

assignmentTarget: identifier;

functionCall: identifier '(' actualParameters ')';

ifStatement: 'if' '(' expression ')' statement ('else' statement)?;

whileStatement: 'while' '(' expression ')' statement;

actualParameters: expression (',' expression)*;

expression: additiveExpression;

additiveExpression: multiplicativeExpression (('+' | '-') multiplicativeExpression)*;

multiplicativeExpression: primaryExpression (('*' | '/') primaryExpression)*;

primaryExpression: integerLiteral | floatLiteral | stringLiteral | booleanLiteral | identifier | '(' expression ')';

integerLiteral: IntegerLiteral;

floatLiteral: FloatLiteral;

stringLiteral: StringLiteral;

booleanLiteral: BooleanLiteral;

identifier: Identifier;

// Custom rules for variable declarations
variableDeclaration: LET identifier variableType (assignmentOperator expression)?;

variableType: TYPE ('?' | '');

// Custom rule for changing variable type
typeChangeStatement: assignmentTarget '?' TYPE;
