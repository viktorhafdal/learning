#include <stdio.h>

/* print Celsius-Fahrenheit table
 *  for celsius = 0, 20, ..., 3000 */

int main() {
  float celsius, fahr;
  float lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  celsius = lower;

  printf("Celsius to Fahrenheit conversion table\n");

  while (celsius <= upper) {
    fahr = (9.0 / 5.0) * celsius + 32.0;
    printf("%3.0f %6.2f\n", celsius, fahr);
    celsius += step;
  }

  return 0;
}
