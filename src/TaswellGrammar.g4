grammar MyGrammar;

import TypeScript;

// parser rules
compilationUnit : functionDeclaration* EOF;

functionDeclaration : 'fn' | 'func' identifier '(' parameterList? ')' (':' type)? blockStatement;

blockStatement : '{' statement* '}';

statement : declarationStatement | expressionStatement;

declarationStatement : 'let' identifier ':' type '=' expression ';';

expressionStatement : expression ';';

expression : primaryExpression (binaryOperator primaryExpression)*;

primaryExpression : literal | identifier | '(' expression ')';

literal : INT | FLOAT | STRING;

parameterList : parameter (',' parameter)*;

parameter : identifier ':' type;

type : 'int' | 'float' | 'string';

identifier : '[a-zA-Z_][a-zA-Z0-9_]'*;

// lexer rules
INT : '-'? [0-9]+;
FLOAT : '-'? [0-9]+ '.' [0-9]+;
STRING : '"' ~[\r\n"]* '"';
PLUS : '+';
MINUS : '-';
STAR : '*';
SLASH : '/';
EQ : '=';
SEMI : ';';
LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
COMMA : ',';
WS : [ \t\r\n]+ -> skip;

binaryOperator
    :   '+' | '-' | '*' | '/'
    ;

program: sourceElements EOF;