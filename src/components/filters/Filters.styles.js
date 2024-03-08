import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #a4082a;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${({ $activeButton }) =>
    $activeButton && 'border-color: #a4082a ;color:  #a4082a; cursor: pointer;'}
`

export const FilterPopup = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 12px;
  background: #313131;
  box-sizing: border-box;
  min-width: 469px;
  padding: 32px 32px 4px 32px;
  position: absolute;
  top: 270px;
`

export const PopupList = styled.ul`
  max-height: 212px;
  max-width: 442px;
  overflow-y: auto;

  &::scrollbar {
    width: 4px;
    border-radius: 4px;
    background-color: #4b4949;
  }

  &::scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }
`

export const PopupText = styled.li`
  cursor: pointer;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 28px;

  &:hover {
    color: #a4082a;
    cursor: pointer;
    text-decoration: underline #a4082a;
  }

  ${({ $activeFilter }) =>
    $activeFilter ? 'color: rgb(182, 114, 255)' : 'color: #ffffff'}
`
