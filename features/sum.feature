Feature: Calculate the sum of two numbers

	Scenario: The two numbers are positive
		Given my first number is "1" and my second number is "2"
		When I add them together
		Then the sum should be "3"

	Scenario: The two numbers are negative
		Given my first number is "-4" and my second number is "-2"
		When I add them together
		Then the sum should be "-6"

	Scenario: One number is positive, the other is negative
		Given my first number is "1" and my second number is "-1"
		When I add them together
		Then the sum should be "0"