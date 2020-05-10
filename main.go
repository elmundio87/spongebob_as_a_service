package main

import (
    "fmt"
    "log"
		"net/http"
		"io/ioutil"
		"math/rand"
		"unicode"
)

func spongebob(input string) string{
	var returnstring string

	for _, rune := range input {
		if(rand.Intn(2) == 1){
			returnstring += string(unicode.ToUpper(rune))
		} else {
			returnstring += string(unicode.ToLower(rune))
		}
	}
	return returnstring
}

func api(w http.ResponseWriter, r *http.Request){
		if(r.Method == "POST"){
			body, err := ioutil.ReadAll(r.Body)
			if err != nil {
				log.Printf("Error reading body: %v", err)
				http.Error(w, "can't read body", http.StatusBadRequest)
				return
			}
			fmt.Fprintf(w, spongebob(string(body)))
		}
}

func healthcheck(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "HTTP 200 OK")
}

func handleRequests() {
		http.HandleFunc("/", api)
		http.HandleFunc("/healthcheck", healthcheck)
    log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {
    handleRequests()
}