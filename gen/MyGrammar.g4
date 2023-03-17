grammar MyGrammar;

program: functionDeclaration* 'program' ;
functionDeclaration: 'fn' identifier '(' parameterList? ')' blockStatement ;
parameterList: parameter (',' parameter)* ;
parameter: identifier ':' type ;
blockStatement: '{' statement* '}' ;
statement: returnStatement ;
returnStatement: 'return' expression ';' ;
expression: identifier | integerLiteral | binaryExpression ;
binaryExpression: expression op=('*' | '/' | '+' | '-') expression ;
identifier: Identifier ;
integerLiteral: IntegerLiteral ;
type: 'number' ;

Identifier: [a-zA-Z]+ ;
IntegerLiteral: [0-9]+ ;
WS: [ \t\r\n]+ -> skip ;
