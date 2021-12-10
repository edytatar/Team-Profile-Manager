// Manager card
const createManagerCard = function (manager) {
    return `
    <section class="flex flex-col bg-white rounded-2xl shadow-xl mb-20">
                    <section class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <figure
                            class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                            <!-- Heroicon -->
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                        </figure>
                        <h3 class="text-xl font-medium text-gray-900 mb-5">${manager.name}, Manager</h3>

                        <section>
                            <dl class="sm:divide-y sm:divide-gray-200">
                                <section class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-m font-medium text-gray-500">
                                        ID #
                                    </dt>
                                    <dd class="mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${manager.id}
                                    </dd>
                                </section>
                                <section class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-m font-medium text-gray-500">
                                        Office #
                                    </dt>
                                    <dd class="mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${manager.officeNumber}
                                    </dd>
                                </section>
                            </dl>
                        </section>

                    </section>
                    <section class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                        <p class="text-base font-medium text-indigo-700 hover:text-indigo-600"><a
                                href="mailto:${manager.email}" class="mr-2">${manager.email}</a><span
                                aria-hidden="true"> &rarr;</span></p>
                    </section>
                </section>
    `;
}

// Engineer card
const createEngineerCard = function (engineer) {
    return `
    <section class="flex flex-col bg-white rounded-2xl shadow-xl mb-20">
    <section class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <figure
            class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
            <!-- Heroicon -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>

        </figure>
        <h3 class="text-xl font-medium text-gray-900 mb-5">${engineer.name}, Engineer</h3>

        <section>
            <dl class="sm:divide-y sm:divide-gray-200">
                <section class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-m font-medium text-gray-500">
                        ID #
                    </dt>
                    <dd class="mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2">
                        ${engineer.id}
                    </dd>
                </section>
                <section class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-m font-medium text-gray-500">
                        GitHub
                    </dt>
                    <dd class="mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2">
                        <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                    </dd>
                </section>
            </dl>
        </section>

    </section>
    <section class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
        <p class="text-base font-medium text-indigo-700 hover:text-indigo-600"><a
                href="mailto:${engineer.email}" class="mr-2">${engineer.email}</a><span
                aria-hidden="true"> &rarr;</span></p>
    </section>
</section>
    `;
}

// Intern card
const createInternCard = function (intern) {
    return `
    <section class="flex flex-col bg-white rounded-2xl shadow-xl mb-20">
                    <section class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <figure
                            class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                            <!-- Heroicon -->
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>

                        </figure>
                        <h3 class="text-xl font-medium text-gray-900 mb-5">${intern.name}, Intern</h3>

                        <section>
                            <dl class="sm:divide-y sm:divide-gray-200">
                                <section class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-m font-medium text-gray-500">
                                        ID #
                                    </dt>
                                    <dd class="mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${intern.id}
                                    </dd>
                                </section>
                                <section class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-m font-medium text-gray-500">
                                        School
                                    </dt>
                                    <dd class="mt-1 text-m text-gray-900 sm:mt-0 sm:col-span-2">
                                        ${intern.school}
                                    </dd>
                                </section>
                            </dl>
                        </section>

                    </section>
                    <section class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                        <p class="text-base font-medium text-indigo-700 hover:text-indigo-600"><a
                                href="mailto:${intern.email}" class="mr-2">${intern.email}</a><span
                                aria-hidden="true"></span>
                            &rarr;</span></p>
                    </section>
                </section>
    `;
}


// Push to page 
generateHTML = (data) => {

    // Card array 
    pageArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // Manager function
        if (role === 'Manager') {
            const managerCard = createManagerCard(employee);

            pageArr.push(managerCard);
        }

        // Engineer function
        if (role === 'Engineer') {
            const engineerCard = createEngineerCard(employee);

            pageArr.push(engineerCard);
        }

        // Intern function 
        if (role === 'Intern') {
            const internCard = createInternCard(employee);

            pageArr.push(internCard);
        }

    }

    // Join
    const employeeCards = pageArr.join('')

    // Return to generated html page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

// Generate html page 
const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Manager</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>

<body>

    <nav x-data="{ open: false }" class="bg-gray-800">
        <section class="max-w-7xl px-2 sm:px-6 lg:px-8">
            <section class="relative flex items-center justify-between h-16">
                <section class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button @click="open = ! open" type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>

                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path @click="open = ! open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" aria-hidden="true">
                            <path @click="open = ! open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </section>
                <section class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <section class="flex-shrink-0 flex items-center">
                        <h2 class="text-white text-xl">Team Profile Manager</h2>

                        <section class="hidden sm:block sm:ml-6">
                            <section class="flex justify-start space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-m font-medium"
                                    aria-current="page">Dashboard</a>

                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">Team</a>

                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">Projects</a>

                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium">Calendar</a>
                            </section>
                        </section>
                    </section>
                </section>


            </section>
        </section>

        <!-- Mobile menu, show/hide based on menu state. -->
        <section class="sm:hidden" id="mobile-menu">
            <section x-show="open" class="px-2 pt-2 pb-3 space-y-1">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page">Dashboard</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </section>
        </section>
    </nav>


    <main class="bg-white">
        <!-- Header -->
        <section class="relative pb-32 bg-gray-800">
            <figure class="absolute inset-0">
                <img class="w-full h-full object-cover" src="./Images/team.jpg" alt="">
                <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
            </figure>
            <section class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Team Members</h1>
                <p class="mt-6 max-w-3xl text-xl text-gray-300">Below is a list of the members on your team. You can
                    view their information and get in contact with them directly by clicking on their email or GitHub
                    username. </p>
            </section>
        </section>

        <!-- Overlapping cards -->
        <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading">

            <h2 class="sr-only" id="contact-heading">Contact us</h2>
            <section class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">

               <!--Team Cards-->
               ${employeeCards}

            </section>
        </section>

    </main>



</body>

</html>
`;
}

// export to index
module.exports = generateHTML;