#include <iostream>
#include <string>

int main()
{
    std::cout << "What operator do you want to use?\n";
    std::string op;
    std::cin >> op;
    std::cout << "What is your first number?\n";
    double num1;
    std::cin >> num1;
    std::cout << "What is your second number?\n";
    double num2;
    std::cin >> num2;
    if (op == "+")
    {
        std::cout << num1 + num2;
    }
    else if (op == "-")
    {
        std::cout << num1 - num2;
    }
    else if (op == "*")
    {
        std::cout << num1 * num2;
    }
    else if (op == "/")
    {
        std::cout << num1 / num2;
    }
    else
    {
        std::cout << "Invalid operator.\n";
    }
}