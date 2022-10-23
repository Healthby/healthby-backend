const environments = {
  port: Number(process.env.port) || 3000,
  nodeEnv: process.env.NODE_ENV,
}

export default environments
