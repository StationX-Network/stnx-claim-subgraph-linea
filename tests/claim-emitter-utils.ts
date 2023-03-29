import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AirdropClaimed,
  ChangeClaimAmountDetails,
  ChangeCooldownDetails,
  ChangeRollbackAddress,
  ChangeRoot,
  ChangeStartAndEndTime,
  ClaimContractDeployed,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  RollbackTokens,
  ToggleClaim
} from "../generated/ClaimEmitter/ClaimEmitter"

export function createAirdropClaimedEvent(
  claimContract: Address,
  user: Address,
  token: Address,
  claimableAmount: BigInt,
  airdropAmount: BigInt
): AirdropClaimed {
  let airdropClaimedEvent = changetype<AirdropClaimed>(newMockEvent())

  airdropClaimedEvent.parameters = new Array()

  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimableAmount",
      ethereum.Value.fromUnsignedBigInt(claimableAmount)
    )
  )
  airdropClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "airdropAmount",
      ethereum.Value.fromUnsignedBigInt(airdropAmount)
    )
  )

  return airdropClaimedEvent
}

export function createChangeClaimAmountDetailsEvent(
  claimContract: Address,
  claimAmountDetails: ethereum.Tuple
): ChangeClaimAmountDetails {
  let changeClaimAmountDetailsEvent = changetype<ChangeClaimAmountDetails>(
    newMockEvent()
  )

  changeClaimAmountDetailsEvent.parameters = new Array()

  changeClaimAmountDetailsEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeClaimAmountDetailsEvent.parameters.push(
    new ethereum.EventParam(
      "claimAmountDetails",
      ethereum.Value.fromTuple(claimAmountDetails)
    )
  )

  return changeClaimAmountDetailsEvent
}

export function createChangeCooldownDetailsEvent(
  claimContract: Address,
  cooldownDetails: ethereum.Tuple
): ChangeCooldownDetails {
  let changeCooldownDetailsEvent = changetype<ChangeCooldownDetails>(
    newMockEvent()
  )

  changeCooldownDetailsEvent.parameters = new Array()

  changeCooldownDetailsEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeCooldownDetailsEvent.parameters.push(
    new ethereum.EventParam(
      "cooldownDetails",
      ethereum.Value.fromTuple(cooldownDetails)
    )
  )

  return changeCooldownDetailsEvent
}

export function createChangeRollbackAddressEvent(
  claimContract: Address,
  newAddress: Address
): ChangeRollbackAddress {
  let changeRollbackAddressEvent = changetype<ChangeRollbackAddress>(
    newMockEvent()
  )

  changeRollbackAddressEvent.parameters = new Array()

  changeRollbackAddressEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeRollbackAddressEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return changeRollbackAddressEvent
}

export function createChangeRootEvent(
  claimContract: Address,
  newRoot: Bytes
): ChangeRoot {
  let changeRootEvent = changetype<ChangeRoot>(newMockEvent())

  changeRootEvent.parameters = new Array()

  changeRootEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeRootEvent.parameters.push(
    new ethereum.EventParam("newRoot", ethereum.Value.fromFixedBytes(newRoot))
  )

  return changeRootEvent
}

export function createChangeStartAndEndTimeEvent(
  claimContract: Address,
  newStartTime: BigInt,
  newEndTime: BigInt
): ChangeStartAndEndTime {
  let changeStartAndEndTimeEvent = changetype<ChangeStartAndEndTime>(
    newMockEvent()
  )

  changeStartAndEndTimeEvent.parameters = new Array()

  changeStartAndEndTimeEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  changeStartAndEndTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newStartTime",
      ethereum.Value.fromUnsignedBigInt(newStartTime)
    )
  )
  changeStartAndEndTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newEndTime",
      ethereum.Value.fromUnsignedBigInt(newEndTime)
    )
  )

  return changeStartAndEndTimeEvent
}

export function createClaimContractDeployedEvent(
  claimSettings: ethereum.Tuple,
  admin: Address,
  claimContract: Address
): ClaimContractDeployed {
  let claimContractDeployedEvent = changetype<ClaimContractDeployed>(
    newMockEvent()
  )

  claimContractDeployedEvent.parameters = new Array()

  claimContractDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "claimSettings",
      ethereum.Value.fromTuple(claimSettings)
    )
  )
  claimContractDeployedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  claimContractDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )

  return claimContractDeployedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createRollbackTokensEvent(
  claimContract: Address,
  rollbackAddress: Address,
  amount: BigInt
): RollbackTokens {
  let rollbackTokensEvent = changetype<RollbackTokens>(newMockEvent())

  rollbackTokensEvent.parameters = new Array()

  rollbackTokensEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  rollbackTokensEvent.parameters.push(
    new ethereum.EventParam(
      "rollbackAddress",
      ethereum.Value.fromAddress(rollbackAddress)
    )
  )
  rollbackTokensEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rollbackTokensEvent
}

export function createToggleClaimEvent(
  claimContract: Address,
  status: boolean
): ToggleClaim {
  let toggleClaimEvent = changetype<ToggleClaim>(newMockEvent())

  toggleClaimEvent.parameters = new Array()

  toggleClaimEvent.parameters.push(
    new ethereum.EventParam(
      "claimContract",
      ethereum.Value.fromAddress(claimContract)
    )
  )
  toggleClaimEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return toggleClaimEvent
}
