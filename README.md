# JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

| Operator | Example | Same As |
| --- | --- | --- |
| =	| x = y |	x = y |
| += |	x += y |	x = x + y |
| -= |	x -= y | x = x - y |
| *= |	x *= y |	x = x * y |
| /= |	x /= y |	x = x / y |
| %= |	x %= y |	x = x % y |
| **= |	x **= y |	x = x ** y |


## Decrement (--)

The decrement (--) operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.

### Syntax

Operator: x-- or --x

### Description

The -- operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt decrement if the operand becomes a BigInt; otherwise, it performs number decrement.

If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing.

If used prefix, with operator before operand (for example, --x), the decrement operator decrements and returns the value after decrementing.

The decrement operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). --x itself evaluates to a value, not a reference, so you cannot chain multiple decrement operators together.

## Increment (++)

The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

### Syntax 

Operator: x++ or ++x

### Description

The ++ operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt increment if the operand becomes a BigInt; otherwise, it performs number increment.

If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

