#include <stdio.h>

/* print Fahrenheit-Celsius table
 *  for fahr = 0, 20, ..., 3000 */

int main() {
  float fahr, celsius;
  float lower, upper, step;

  lower = 0;   /* lower limit of temp scale */
  upper = 300; /* upper limit of temp scale */
  step = 20;   /* step size */

  fahr = lower;

  printf("Fahrenheit to Celcius conversion table\n");

  while (fahr <= upper) {
    celsius = (5.0 / 9.0) * (fahr - 32.0);
    printf("%3.0f %6.2f\n", fahr, celsius);
    fahr = fahr + step;
  }

  return 0;
}
