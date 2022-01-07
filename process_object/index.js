const initialMemoryUsage = process.memoryUsage()// TODO 1
yourName = process.argv[2]// TODO 2
environment = ``
currentMemoryUsage = process.memoryUsage()// TODO 3

for (let index = 0; index < 1000; index++) {
    
}
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);