/*GLOBAL VARIABLES AND CONSTANTS*/
let color = Math.floor(Math.random() * 10) - 1 //randomize color
select = $("#repetitions-data")
bannedWords = [
    "isso", "esse", "esses", "este", "estes",
    "a", "e", "o", "ao", "um", "uma", "uns", "umas",
    "pra", "por", "para", "que", "não"
]
newBannedWords = []
/********************************/

function animateBox(elem) {
    let whoAnimate

    /*Introduction btns & Essay Title btns*/
    $(".introduction").fadeOut()
    if (elem == $(".btn-start")[0] || elem == $("#btn-title-settings")[0]) {
        whoAnimate = $(".settings")
    } else if (elem == $(".btn-exercises")[0]) {
        whoAnimate = $(".set-exercises")
    } else if (elem == $("#btn-title-info")[0]) {
        whoAnimate = $(".info")
    } else if (elem == $(".btn-verify")[1] && $("#txt-essay").text() != "" && $("#txt-essay").text() != "Digite sua redação aqui...") {
        whoAnimate = $(".data")
        $(".desktop").css("opacity", 0)
    }
    if (whoAnimate) {
        //saving previous settings
        previousMinLength = $("#minLength").val()
        previousMinNRepetitions = $("#minNRepetitions").val()

        whoAnimate.css("display", "block")
        whoAnimate.animate({ left: "0" })

        if (whoAnimate[0] != $(".data")[0]) {
            return
        }
    }
    /*settings btn-ok*/
    whoAnimate = []
    for (let i in $(".btn-ok")) {
        if (elem == $(".btn-ok")[i]) {
            whoAnimate.push($(".settings"))
            whoAnimate.push($(".info"))
            whoAnimate.push($(".main"))
            for (let c = 0; c <= 1; c++) {
                whoAnimate[c].fadeOut(function () {
                    whoAnimate[c].css("left", "100%")
                    whoAnimate[2].fadeIn()
                })
            }
            return
        }
    }

    /*Data btns*/
    if (elem == "btn-verify") {
        whoAnimate.push($(".btn-verify"))
        whoAnimate.push($(".btn-format"))
    } else if (elem == $(".btn-format")[0] || elem == $(".btn-format")[1]) {
        whoAnimate.push($(".btn-format"))
        whoAnimate.push($(".btn-verify"))
    }
    if (whoAnimate.length != 0) {
        whoAnimate[0].fadeOut(() => {
            whoAnimate[1].fadeIn(() => {
            })

        })
        return
    }
    /*Mobile*/
    if (elem == $("#btn-leave")[0]) {
        $(".data").fadeOut()
        return
    }

}

/*FUNCTIONS TO COUNT AND DETECT WORDS */
function isWord(str, word) {
    let isWord = true
    let char1, char2
    for (let i = 65; i <= 101; i++) {
        if (i == 91) { char1 = "" } else if (i > 91) {
            char1 = String(i).charAt(String(i).length - 1)
        } else { char1 = String.fromCharCode(i) }
        for (let c = 65; c <= 101; c++) {
            if (c == 91) { char2 = "" } else if (c > 91) {
                char2 = String(c).charAt(String(c).length - 1)
            } else { char2 = String.fromCharCode(c) }
            if (!(i == 91 && i == c)) {
                if (str.match(new RegExp(`${char1}${word}${char2}`, "gi")) != null) { isWord = false }
            }
        }
    }
    return isWord
}

const replaceAllWords = (string, oldWord, newWord) => {
    string = string.replace(new RegExp(`${oldWord}`, "gi"), `${newWord}`)
    return string
}

function countStringWords(str, word) {
    const re = new RegExp(`${word}`, "gi")
    return (((str || "").match(re) || []).length)
}

function createWordsArray(myString) {
    return myString.replace(/,/g, " ").replace(/\./g, ' ').replace(/:/g, " ").replace(/!/g, " ")
        .replace(/\?/g, " ").replace(/;/g, " ").replace(/\//g, " ").toLowerCase().split(" ")
}

function removeFromArray(myArray, arrayRemove) {
    if (Array.isArray(arrayRemove)) {
        for (let i in arrayRemove) {
            myArray = myArray.filter(word => word != arrayRemove[i])
        }
    } else {
        myArray = myArray.filter(word => word != arrayRemove)
    }
    return myArray
}
/*************************************/

/*Settings*/
let previousMinLength, previousMinNRepetitions

function banWord(e) {
    if (e.key == "Enter" || e.type == "click") {
        if (bannedWords.includes($("#newBannedWord").val()) || newBannedWords.includes($("#newBannedWord").val())) {
            alert("Essa palavra já está na lista")
        } else {
            newBannedWords.push($("#newBannedWord").val())
            if ($("#yourList").text() == "") {
                $("#yourList").text($("#newBannedWord").val())
            } else {
                $("#yourList")[0].innerText += `, ${$("#newBannedWord").val()}`
            }
            $("#newBannedWord").val("")
        }
    }
}

function discard() {
    $("#minLength").val(previousMinLength)
    $("#minNRepetitions").val(previousMinNRepetitions)
}
/**********/


function main(e, element) {
    let textString = $('#txt-essay').text()

    if (e.type == "focusout" && textString == "") { //placeholder
        $("#txt-essay").text("Digite sua redação aqui...")
    } else if (e.type == "click" && element == $("#txt-essay")[0] && textString == "Digite sua redação aqui...") {//Eliminate placeholder
        $("#txt-essay").text("")
    } else if ((textString == "" || textString == "Digite sua redação aqui...")
        && e.type == "click" && (element == $(".btn-verify")[0] || element == $(".btn-verify")[1])) {//Verify if there is any text to be corrected
        alert("Sua redação está em branco, escreva algo para ser verificado.")
    } else {
        let textArray = [] //Will contain all words, separately
        const optionList = []
        const data = $(".small-data p")

        textArray = createWordsArray(textString)
        textArray = removeFromArray(textArray, ["", " ", "+"])

        /*Characters number*/
        data[0].innerHTML = "Caracteres: " + Number(textString.length + 1)

        /*Words number*/
        data[1].innerHTML = "Palavras: " + textArray.length

        /*Lines number*/
        let nLines = 1
        if (textString.length > 66) { nLines = Math.ceil(textString.length / 70) }
        data[2].innerHTML = "Linhas: " + nLines

        /*Main part of program*/
        if (e.type == "click" && (element == $(".btn-verify")[0] || element == $(".btn-verify")[1])) {
            //data correction
            data[0].innerHTML = "Caracteres: " + Number(textString.length)

            select.html("")
            const nRepetitions = []
            let textStringHighlighted = textString
            let onTheList

            for (let i in textArray) { //count repetitions of each word
                nRepetitions[i] = countStringWords(textString, textArray[i])

                onTheList = false
                for (let c in bannedWords) {//check if word is not banned by configurations
                    if (bannedWords[c] == textArray[i]) { onTheList = true }
                }
                for (let c in optionList) { //check if word is in the option list
                    if (textArray[i].toLowerCase() == optionList[c]) { onTheList = true }
                }
                if (!onTheList) {
                    if (nRepetitions[i] >= $("#minNRepetitions").val() && textArray[i].length >= $("#minLength").val()) {//Verify settings conditions
                        if (isWord(textString, textArray[i])) {//See if it's a complete word or just part of one
                            optionList.push(textArray[i].toLowerCase())
                            select[0].innerHTML += `<p class="option">${textArray[i]}: ${nRepetitions[i]}</p>` //Make a list with repeated words and it's number of repetitions
                            color++
                            textStringHighlighted = replaceAllWords(textStringHighlighted, textArray[i], `<b class="color${color}">${textArray[i]}</b>`)//post highlighted words in the correct place
                            if (color == 9) { color = -1 }
                            $("#txt-essay").html(textStringHighlighted)
                            animateBox("btn-verify")
                        }
                    }
                }
            }
            if (select.text() == "") { /*If there isn't repeated words, congratulate*/
                select.html("<p class='option'>Parabéns! Não há repetições.</p>")
            }
            select.css("opacity", 1)
        }
    }
}
function format(e) {
    if (e.type == "click") {
        $("#txt-essay").text($("#txt-essay").text())
    } else {
        e.preventDefault()
        navigator.clipboard.readText()
            .then(clipboardText => {
                $("#txt-essay").text(clipboardText)
            })
    }
}