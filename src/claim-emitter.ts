import {
  AirdropClaimed as AirdropClaimedEvent,
  ChangeClaimAmountDetails as ChangeClaimAmountDetailsEvent,
  ChangeCooldownDetails as ChangeCooldownDetailsEvent,
  ChangeRollbackAddress as ChangeRollbackAddressEvent,
  ChangeRoot as ChangeRootEvent,
  ChangeStartAndEndTime as ChangeStartAndEndTimeEvent,
  ClaimContractDeployed as ClaimContractDeployedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  RollbackTokens as RollbackTokensEvent,
  ToggleClaim as ToggleClaimEvent
} from "../generated/ClaimEmitter/ClaimEmitter"
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
} from "../generated/schema"

export function handleAirdropClaimed(event: AirdropClaimedEvent): void {
  let entity = new AirdropClaimed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.user = event.params.user
  entity.token = event.params.token
  entity.claimableAmount = event.params.claimableAmount
  entity.airdropAmount = event.params.airdropAmount
  entity.save()
}

export function handleChangeClaimAmountDetails(
  event: ChangeClaimAmountDetailsEvent
): void {
  let entity = new ChangeClaimAmountDetails(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.claimAmountDetails_isMaxClaimable =
    event.params.claimAmountDetails.isMaxClaimable
  entity.claimAmountDetails_maxClaimable =
    event.params.claimAmountDetails.maxClaimable
  entity.claimAmountDetails_totalClaimAmount =
    event.params.claimAmountDetails.totalClaimAmount
  entity.claimAmountDetails_tokenIds = event.params.claimAmountDetails.tokenIds
  entity.save()
}

export function handleChangeCooldownDetails(
  event: ChangeCooldownDetailsEvent
): void {
  let entity = new ChangeCooldownDetails(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.cooldownDetails_hasCooldownPeriod =
    event.params.cooldownDetails.hasCooldownPeriod
  entity.cooldownDetails_cooldownPeriod =
    event.params.cooldownDetails.cooldownPeriod
  entity.save()
}

export function handleChangeRollbackAddress(
  event: ChangeRollbackAddressEvent
): void {
  let entity = new ChangeRollbackAddress(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.newAddress = event.params.newAddress
  entity.save()
}

export function handleChangeRoot(event: ChangeRootEvent): void {
  let entity = new ChangeRoot(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.newRoot = event.params.newRoot
  entity.save()
}

export function handleChangeStartAndEndTime(
  event: ChangeStartAndEndTimeEvent
): void {
  let entity = new ChangeStartAndEndTime(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.newStartTime = event.params.newStartTime
  entity.newEndTime = event.params.newEndTime
  entity.save()
}

export function handleClaimContractDeployed(
  event: ClaimContractDeployedEvent
): void {
  let entity = new ClaimContractDeployed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimSettings_creatorAddress =
    event.params.claimSettings.creatorAddress
  entity.claimSettings_walletAddress = event.params.claimSettings.walletAddress
  entity.claimSettings_airdropToken = event.params.claimSettings.airdropToken
  entity.claimSettings_daoToken = event.params.claimSettings.daoToken
  entity.claimSettings_hasAllowanceMechanism =
    event.params.claimSettings.hasAllowanceMechanism
  entity.claimSettings_isNFT = event.params.claimSettings.isNFT
  entity.claimSettings_nftTotalSupply =
    event.params.claimSettings.nftTotalSupply
  entity.claimSettings_isEnabled = event.params.claimSettings.isEnabled
  entity.claimSettings_startTime = event.params.claimSettings.startTime
  entity.claimSettings_endTime = event.params.claimSettings.endTime
  entity.claimSettings_rollbackAddress =
    event.params.claimSettings.rollbackAddress
  entity.claimSettings_merkleRoot = event.params.claimSettings.merkleRoot
  entity.claimSettings_permission = event.params.claimSettings.permission
  entity.claimSettings_claimAmountDetails_isMaxClaimable =
    event.params.claimSettings.claimAmountDetails.isMaxClaimable
  entity.claimSettings_claimAmountDetails_maxClaimable =
    event.params.claimSettings.claimAmountDetails.maxClaimable
  entity.claimSettings_claimAmountDetails_totalClaimAmount =
    event.params.claimSettings.claimAmountDetails.totalClaimAmount
  entity.claimSettings_claimAmountDetails_tokenIds =
    event.params.claimSettings.claimAmountDetails.tokenIds
  entity.claimSettings_cooldownDetails_hasCooldownPeriod =
    event.params.claimSettings.cooldownDetails.hasCooldownPeriod
  entity.claimSettings_cooldownDetails_cooldownPeriod =
    event.params.claimSettings.cooldownDetails.cooldownPeriod
  entity.admin = event.params.admin
  entity.claimContract = event.params.claimContract
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRollbackTokens(event: RollbackTokensEvent): void {
  let entity = new RollbackTokens(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.rollbackAddress = event.params.rollbackAddress
  entity.amount = event.params.amount
  entity.save()
}

export function handleToggleClaim(event: ToggleClaimEvent): void {
  let entity = new ToggleClaim(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.claimContract = event.params.claimContract
  entity.status = event.params.status
  entity.save()
}
