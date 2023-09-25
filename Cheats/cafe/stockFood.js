
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/cafe/stockFood.js")?.answers?.[0]}`)).then(async x => {
        if (1678659459983 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.alert = i.contentWindow.alert.bind(window);
            i.remove();
            if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
            else {
                const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
            }
        }
    });
})();
