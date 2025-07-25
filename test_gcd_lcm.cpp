#include <iostream>
#include <numeric>  // Required for std::gcd and std::lcm

int main() {
    int a = 12, b = 18;
    
    // Using std::gcd and std::lcm (C++17 and later)
    std::cout << "GCD of " << a << " and " << b << " is: " << std::gcd(a, b) << std::endl;
    std::cout << "LCM of " << a << " and " << b << " is: " << std::lcm(a, b) << std::endl;
    
    return 0;
}
