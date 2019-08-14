function getAll(token) {
    return new Promise((res) => {

        let data = {};

        data.professional = `<p>
        I have more than 15 years experience with IT developing web applications.<br/><br/>
        Solid knowledge of API (RESTful) and how to build them.<br/><br/>
        I'm working with ReactJS and NodeJS more than 2 years.<br/><br/>
        I used Agile methodology, including daily meeting, "Sprint Planning" to discuss the task and estimate the size using planning poker.
        </p>`;

        data.personal = `I have Dual Citizenship : EU (Italian) & Brazilian. 
I like to learn new technologies and I'm very proactive.
In my freetimes I practice Jiu-Jitsu & body-building`;

        data.projects = [
            { id: 1, title: "Integration with Payment Gateway (Cielo)", description: "I did an integration with payment gateway that allows the customers to pay debts with credit card", image: "/images/project01.png", index: 0 }
            , { id: 2, title: "Price Robot", description: "I did a Robot to compare prices of e-commerce competitors and adjust automaticaly", image: "/images/project02.png", index: 1 }
            , { id: 3, title: "Shipping Control", description: "I did a shipping control for e-commerce orders", image: "/images/project03.png", index: 2 }
            , { id: 4, title: "Goal Reports", description: "I did a Goals report in real-time", image: "/images/project04.png", index: 3 }
            , { id: 5, title: "Driver expenses", description: "I did an interface to control drivers expenses and send payments to HR department", image: "/images/project05.png", index: 4 }
        ];

        data.languages = [
            { id: 1, language: 'French', value: 40 },
            { id: 2, language: 'English', value: 70 },
            { id: 3, language: 'Portuguese', value: 100 }
        ];

        data.experiences = [
            { id: 1, company: 'Delgallo Studios', value: 29 },
            { id: 2, company: 'MSys Outsourcing', value: 35 },
            { id: 3, company: 'Capgemini', value: 6 },
            { id: 4, company: 'DPaschoal', value: 72 },
            { id: 5, company: 'Procsys', value: 12 },
            { id: 6, company: 'StormCreations', value: 72 },
        ];

        data.qualities = [
            { id: 1, quality: 'Creativity', value: 85 }
            , { id: 2, quality: 'Honesty', value: 100 }
            , { id: 3, quality: 'Proactivity', value: 70 }
            , { id: 4, quality: 'Team Spirit', value: 85 }
            , { id: 5, quality: 'Persistence', value: 99 }
            , { id: 6, quality: '', value: 0 }
        ];

        data.technologies = [
            { id: 1, name: "React JS" }
            , { id: 2, name: "Node JS" }
            , { id: 3, name: "ES6" }
            , { id: 4, name: "API RESTful" }
            , { id: 5, name: "Amazon AWS" }
        ];

        res(data);
    })
}

function getAllFrameworks(token) {
    return new Promise((res) => {

        let data = [];

        data = [
            { id: 1, title: "Semantic UI React", description: "Is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.", image: "/images/semanticui.png", isapproving: false, isdeclining: false }
            , { id: 2, title: "Socket.IO", description: "Enables real-time, bidirectional and event-based communication.", image: "/images/socketio.png", isapproving: false, isdeclining: false }
            , { id: 3, title: "Chart JS", description: "Simple flexible JavaScript charting for designers & developers", image: "/images/chartjs.png", isapproving: false, isdeclining: false }
            , { id: 4, title: "Redux", description: "Is a predictable state container for JavaScript apps", image: "/images/redux.png", isapproving: false, isdeclining: false }
        ];

        res(data)

    })
}

function postFramework(token, entity) {
    return new Promise((res) => {
        res({
            status: 'ok'
            , entity: entity
        });
    })
}

module.exports = {
    getAll
    , getAllFrameworks
    , postFramework
}