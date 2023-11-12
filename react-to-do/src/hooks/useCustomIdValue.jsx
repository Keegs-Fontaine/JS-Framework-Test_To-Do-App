import { useMemo } from "react"

export default function useCustomIdValue(arr) {
  return useMemo(() => arr.map(item => crypto.randomUUID()), [])
}
