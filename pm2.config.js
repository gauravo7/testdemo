module.exports = {
  apps: [
    {
      name: "trumathapp-0",
      script: "npm",
      args: "run start",
      exec_mode: "fork",
      max_memory_restart: "3584M",
      watch: false,
      env: {
        PORT: 3000
      }
    },
    {
      name: "trumathapp-1",
      script: "npm",
      args: "run start",
      exec_mode: "fork",
      max_memory_restart: "3584M",
      watch: false,
      env: {
        PORT: 3001
      }
    }
  ]
};
