#!/usr/bin/env node

var generate_primes = function(primes_count) {
  prime_factors = [];
  for(var i=2; prime_factors.length < primes_count; i++) {
    if(is_prime(i)) {
      //console.log("Found " + i);
      prime_factors.push(i);
    }
  }
  return prime_factors;
};

var is_prime = function(n) {
  n_squared = Math.sqrt(n);
  for(var i=2; i<n_squared+1; i++) {
    if(i!= n && n % i == 0) {
      //console.log(n + " is not prime")
      return false;
    }
  }
  return true;
};

var format_primes = function(prime_factors) {
  return prime_factors.join(",");
}

var write_to_file = function(string) {
  var fs = require('fs');
  var outfile = 'primes.txt';
  fs.writeFileSync(outfile,format_primes(generate_primes(100)))
}

primes = format_primes(generate_primes(100));
console.log(primes);
write_to_file(primes);



