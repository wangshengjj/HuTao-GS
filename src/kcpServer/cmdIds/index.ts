import config, { DEFAULT_CONFIG } from '@/config'
import { CmdIds } from '@/types/kcp'
import ver1_4_50 from './ver1_4_50'
import ver1_6_51 from './ver1_6_51'
import ver2_6 from './ver2_6'
import ver2_7 from './ver2_7'
import ver2_8 from './ver2_8'
import ver2_8_50 from './ver2_8_50'
import ver3_3_0 from './ver3_3_0'
import ver3_4_0 from './ver3_4_0'
import ver3_5_0 from './ver3_5_0'
import ver3_6_0 from './ver3_6_0'
import ver3_7_0 from './ver3_7_0'

const versionMap: { [version: string]: CmdIds } = {
  '1.4.50': ver1_4_50,
  '1.6.51': ver1_6_51,
  '2.0.0': ver1_6_51,
  '2.6.0': ver2_6,
  '2.7.0': ver2_7,
  '2.8.0': ver2_8,
  '2.8.50': ver2_8_50,
  '2.8.51': ver2_8_50,
  '2.8.52': ver2_8_50,
  '2.8.53': ver2_8_50,
  '2.8.54': ver2_8_50,
  '3.0.0': ver2_8,
  '3.0.50': ver2_8,
  '3.0.51': ver2_8,
  '3.0.52': ver2_8,
  '3.0.53': ver2_8,
  '3.1.0': ver2_8,
  '3.1.50': ver2_8,
  '3.1.51': ver2_8,
  '3.1.52': ver2_8,
  '3.1.53': ver2_8,
  '3.2.0': ver2_8,
  '3.2.50': ver3_3_0,
  '3.2.51': ver3_3_0,
  '3.2.52': ver3_3_0,
  '3.2.53': ver3_3_0,
  '3.3.0': ver3_3_0,
  '3.4.0': ver3_4_0,
  '3.5.0': ver3_5_0,
  '3.6.0': ver3_6_0,
  '3.7.0': ver3_7_0
}

export const cmdIds: CmdIds = versionMap[config.version] || versionMap[DEFAULT_CONFIG.version] || {}
export const switchedCmdIds = Object.fromEntries(
  Object.entries(cmdIds)
    .map(e => [e[1], e[0]])
)

export const PACKET_HEAD = 0xFFFF

export const getNameByCmdId = (cmdId: number | string): number | string => {
  if (cmdId === PACKET_HEAD) return 'PacketHead'

  const name = switchedCmdIds[cmdId]
  if (name == null) return cmdId

  return name
}

export const getCmdIdByName = (protoName: string | number): number | string => {
  if (protoName === 'PacketHead') return PACKET_HEAD

  const id = cmdIds[protoName]
  if (id == null) return protoName

  return id
}
