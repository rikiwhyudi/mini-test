package main

import "fmt"

func main() {
	fmt.Println(apaBole(10))
}

func apaBole(n int) string {
	var result string

	for i := 1; i <= n; i++ {
		if i%3 == 0 && i%5 == 0 {
			result += "ApaBole\n"
		} else if i%3 == 0 {
			result += "Apa\n"
		} else if i%5 == 0 {
			result += "Bole\n"
		} else {
			result += fmt.Sprintf("%d\n", i)
		}
	}

	return result
}
