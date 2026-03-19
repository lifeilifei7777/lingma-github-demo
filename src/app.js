// JavaScript Hello World 示例
class HelloWorld {
    constructor() {
        this.message = "Hello, World from JavaScript!";
    }

    sayHello(name = "World") {
        return `${this.message} Welcome, ${name}!`;
    }

    getCurrentTime() {
        return new Date().toLocaleString();
    }
}

// 导出类供其他模块使用
module.exports = HelloWorld;

// 如果直接运行此文件
if (require.main === module) {
    const app = new HelloWorld();
    console.log(app.sayHello());
    console.log(`Current time: ${app.getCurrentTime()}`);
}