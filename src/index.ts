/**
 * @author    Yannick Deubel (https://github.com/yandeu)
 * @copyright Copyright (c) 2021 Yannick Deubel
 * @license   {@link https://github.com/yandeu/docker-swarm-visualizer/blob/main/LICENSE LICENSE}
 */

const agent = process.env.MODE === 'agent'
const manager = process.env.MODE === 'manager'

const main = async () => {
  if (agent) await import('./agent.js')
  else if (manager) await import('./manager.js')
  else console.log('Pass env MODE; "agent" or "manager"')
}

main()
