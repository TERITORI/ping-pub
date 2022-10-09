import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: '/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })

  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/TERITORI/teritori-chain',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Discord',
    href: 'https://discord.gg/teritori',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/TeritoriNetwork',
    icon: 'TwitterIcon',
  })
  // chainMenus.push({
  //   title: 'Telegram',
  //   href: 'https://t.me/pingpub',
  //   icon: 'SendIcon',
  // })

  return chainMenus
}

export default processMenu()
