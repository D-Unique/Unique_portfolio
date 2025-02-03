

function BannerChangeContant(id: string) {


    const items = ["Welcome to my Portfoilo", "I am a Software Engineer", "I Solve Your Problem", "I love Singing"];
        let index = 0; // Start at the first item

        // Function to update the displayed item
        const updateItem = () => {
            // Update the content of the span
            const element = id ? document.getElementById(id) : null;
            if (element) {
                element.textContent = items[index];
            } else {
                return null
            }

            // Increment the index
            index++;

            // If the index exceeds the array length, reset it
            if (index >= items.length) {
                index = 0; // Reset to the first item
            }
        };

        // Call updateItem every second (1000 milliseconds)
    setInterval(updateItem, 4000);
    return null

        // Optional: Stop the interval after a certain time (e.g., 10 seconds)
        // setTimeout(() => {
        //     clearInterval(intervalID);
        //     console.log('Interval cleared.');
    //     // }, 10000); // 10000 milliseconds = 10 seconds
    // setInterval(() => {
        
    // }, 1000);

}

export default BannerChangeContant

