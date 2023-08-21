// Online C++ compiler to run C++ program online
#include <iostream> 
using namespace std;
int main() 
{ 
double numerator, denominator, divide;
cout << "Enter numerator: ";
cin >> numerator;
cout << "Enter denominator: ";
cin >> denominator;
try { 

if (denominator == 0) 
throw 0;

divide = numerator / denominator;
cout << numerator << " / " << denominator << " = " << divide << endl;
} 
catch (int num_exception) { 
cout << "Error: Enter correct value " << num_exception << endl;
} 
return 0;
} 
