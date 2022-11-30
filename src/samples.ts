import jwtDecode, { JwtDecodeOptions } from "jwt-decode";

export interface JwtHeader {
  type: string
  alg: string
  kid: string
}

export type MitIDRiskData = {
  pc: string
  pt: string
  src: string
  obs: string
  agg: string
  ts: string
}

export type JwtPayloadObjectValue = {[key: string]: JwtPayloadValue}
export type JwtPayloadArrayValue = JwtPayloadValue[]
export type JwtPayloadValue = string | number | JwtPayloadObjectValue | JwtPayloadArrayValue
export interface JwtPayload {
  iss: string
  aud: string
  nonce?: string
  identityscheme: string
  authenticationtype: string
  authenticationinstant: string

  nameidentifier: string
  sub: string

  [key: string]: JwtPayloadValue | undefined

  iat: number
  nbf: number
  exp: number
}

export type Sample = {
  jwt: string
  header: JwtHeader
  payload: JwtPayload
}

export function tryJwtDecode<T>(jwt: string, options: JwtDecodeOptions) {
  try {
    return jwtDecode<T>(jwt, options)
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function toSample(jwt: string) : Sample {
  return {
    jwt,
    header: jwtDecode<JwtHeader>(jwt, {header: true}),
    payload: jwtDecode<JwtPayload>(jwt, {header: false})
  };
}

export const MITID_CITIZEN = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjExMjc3MEEzNjZERkJERjRCRURBM0QyMkM2NDFERDg4QTI2N0E4NjcifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi1kZjU5ZDZlMS01MjYwLTRmZmItOWNkMi04Yzg2ZmM5OWQ1NzYiLCJpZGVudGl0eXNjaGVtZSI6ImRrbWl0aWQiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOmRrOm1pdGlkOmxvdyIsImF1dGhlbnRpY2F0aW9ubWV0aG9kIjoicHdkOjE2Njk4MDExODM3NTE6TE9XOlNVQlNUQU5USUFMOkxPVzpMT1ciLCJhdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDA5OjM5OjQ2LjE1MFoiLCJuYW1laWRlbnRpZmllciI6IjNhOGYxNzk4YTUyMjQwNTc5YmZhNjllMTA2ZDNkMmVlIiwic3ViIjoiezNhOGYxNzk4LWE1MjItNDA1Ny05YmZhLTY5ZTEwNmQzZDJlZX0iLCJzZXNzaW9uaW5kZXgiOiIwNmY0NGRiMC1kNWQ1LTRhNTgtOTI5NS00ZTZiOGI0ZGJlYmIiLCJsb0EiOiJMT1ciLCJpYWwiOiJTVUJTVEFOVElBTCIsImFhbCI6IkxPVyIsImZhbCI6IkhJR0giLCJ1dWlkIjoiOGU2YWI0ZWEtNThiOS00MTMwLWE5MDAtNDM2NmJhNTRlZWQ5IiwiY3ByTnVtYmVySWRlbnRpZmllciI6IjI3MTI1ODkxMDAiLCJiaXJ0aGRhdGUiOiIxOTU4LTEyLTI3IiwiZGF0ZW9mYmlydGgiOiIxOTU4LTEyLTI3IiwiYWdlIjoiNjMiLCJuYW1lIjoiUGFpbWFuIFBldGVyc2VuIiwicmVmVGV4dEhlYWRlciI6IkxvZyBvbiBhdCBDcmlpcHRvIiwicmVmVGV4dEJvZHkiOiJAY3JpaXB0by9qd3Qtdmlld2VyIiwiY291bnRyeSI6IkRLIiwiaWF0IjoxNjY5ODAxMTg2LCJuYmYiOjE2Njk4MDExODYsImV4cCI6MTY2OTgxOTE4M30.YVdVd6WUQ4pALWjTGsTaIRqn4cqTKnXM7mXzGRdL-RXkW7ejGs-KlKFP-35HgTMw7uz7EinHGrfAlVR56A4yrCJRLvKiqvP5VyLo-Ohf4AuFfo4Zw9ZanGRuplYChGoM0vw9pgZUtxvkbTrh3Nhi12jBaldfwgNTNss3UIbU4jnIe5OsyDNEBZYKjBJMxk6e5aeb4YSAuIlG-SMTrvaAH47P5V-bNZckmqO16Mlt9edYz2fo6ELBfz1M4G65HdNW5dHFGWbFCoR3LxRICX1JAoxbF4-');
export const MITID_CITIZEN_ADDRESS = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjExMjc3MEEzNjZERkJERjRCRURBM0QyMkM2NDFERDg4QTI2N0E4NjcifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi05NGY1NjkzZi05YWRmLTQ1NjEtOGUzYy01YjIwOTg2NGVlMjYiLCJpZGVudGl0eXNjaGVtZSI6ImRrbWl0aWQiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOmRrOm1pdGlkOmxvdyIsImF1dGhlbnRpY2F0aW9ubWV0aG9kIjoicHdkOjE2Njk4MTE0NzA2NzM6TE9XOlNVQlNUQU5USUFMOkxPVzpMT1ciLCJhdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDEyOjMxOjEzLjUxMloiLCJuYW1laWRlbnRpZmllciI6IjNhOGYxNzk4YTUyMjQwNTc5YmZhNjllMTA2ZDNkMmVlIiwic3ViIjoiezNhOGYxNzk4LWE1MjItNDA1Ny05YmZhLTY5ZTEwNmQzZDJlZX0iLCJzZXNzaW9uaW5kZXgiOiIwNmY0NGRiMC1kNWQ1LTRhNTgtOTI5NS00ZTZiOGI0ZGJlYmIiLCJhZGRyZXNzIjp7ImZvcm1hdHRlZCI6IlR1c25pbGRhIEthbW1hIE9sc2VuXG5HcnVzZ3JhdmVuIDEsMyB0dlxuMzQwMCBIaWxsZXLDuGRcbihMb2thbGl0ZXQgdWtlbmR0KVxuRGFubWFyayIsImNvbW1vbl9uYW1lIjoiVHVzbmlsZGEgS2FtbWEgT2xzZW4iLCJzdHJlZXRfYWRkcmVzcyI6IkdydXNncmF2ZW4gMSwzIHR2IiwicG9zdGFsX2NvZGUiOiIzNDAwIiwiY2l0eSI6IkhpbGxlcsO4ZCIsImxvY2FsaXR5IjoiKExva2FsaXRldCB1a2VuZHQpIiwicmVnaW9uIjpudWxsLCJjb3VudHJ5IjoiRGFubWFyayJ9LCJhZGRyZXNzX2RldGFpbHMiOnsicm9hZCI6IkdydXNncmF2ZW4iLCJyb2FkX2NvZGUiOiIxNzMyIiwibXVuaWNpcGFsaXR5IjoiTHluZ2J5LVRhYXJiw6ZrIiwibXVuaWNpcGFsaXR5X2NvZGUiOiIwMTczIiwiaG91c2VfbnVtYmVyIjoiMDAxIiwiZmxvb3IiOiIwMyIsImFwYXJ0bWVudF9jb2RlIjoiICB0diJ9LCJsb0EiOiJMT1ciLCJpYWwiOiJTVUJTVEFOVElBTCIsImFhbCI6IkxPVyIsImZhbCI6IkhJR0giLCJ1dWlkIjoiOGU2YWI0ZWEtNThiOS00MTMwLWE5MDAtNDM2NmJhNTRlZWQ5IiwiY3ByTnVtYmVySWRlbnRpZmllciI6IjI3MTI1ODkxMDAiLCJiaXJ0aGRhdGUiOiIxOTU4LTEyLTI3IiwiZGF0ZW9mYmlydGgiOiIxOTU4LTEyLTI3IiwiYWdlIjoiNjMiLCJuYW1lIjoiUGFpbWFuIFBldGVyc2VuIiwicmVmVGV4dEhlYWRlciI6IkxvZyBvbiBhdCBDcmlpcHRvIiwicmVmVGV4dEJvZHkiOiJAY3JpaXB0by9qd3Qtdmlld2VyIiwiY291bnRyeSI6IkRLIiwiaWF0IjoxNjY5ODExNDczLCJuYmYiOjE2Njk4MTE0NzMsImV4cCI6MTY2OTgyOTQ3MH0.ViEKKVynUYSfVXOd5Tm_uW0zell-30lUwuRjbk2NK9LBDxLm61MYLfyezdZi4yR8C4GomlfDxaLmGnBBN6FcLb3ZJS9n3VG1apI9u3fsLAwz3_VWgYE_Qx0omEI0DI7Yp49M6cnQBezCvZLaB4PRySZV_24X5T1ZSMkdM5t6sgl3tfndTOXrRBRZlbbuTOVaBQv4MsgdeoctPGzVav8bUx970AGszoZDtfEJIjhmtkHqlbPOB8IymzEciRASjnweSmzWzLWE9e-iGWd9IuHZ3TfMVrK43yvBwPf6LNOd2ge933ztZdfUgsMIOIrAURaNtvNk0sL-0PKFrl9Cs0fbuQ');
export const MITID_BUSINESS_SIGNATORY_RISKDATA = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjUwMEU5NzM2MEVFRDg0QjQzOTYzRDk0NDBDNTBEMDM1MzEzNDJCQjMifQ.eyJpc3MiOiJodHRwczovL2NyaWlwdG8tdGVzdC5wcC5taXRpZC5kayIsImF1ZCI6InVybjpwcHRyOmphdmFzY3JpcHRhcHAiLCJub25jZSI6ImVjbm9uLTcwMTZlNzY5LTYzMGYtNDE2Ni1iMWI0LTIwYWY2NGI5NDY0ZCIsImlkZW50aXR5c2NoZW1lIjoiZGttaXRpZCIsImF1dGhlbnRpY2F0aW9udHlwZSI6InVybjpncm46YXV0aG46ZGs6bWl0aWQ6c3Vic3RhbnRpYWwiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoiYXBwOjE2Njk4MTkwOTkwNDI6U1VCU1RBTlRJQUw6U1VCU1RBTlRJQUw6SElHSDpISUdIIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDE0OjM4OjIxLjY0NFoiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjFhYWRkNWZkYjcyODRmZGJhMWQ4NzQ1MjdjMmE0ZGIzIiwic3ViIjoiezFhYWRkNWZkLWI3MjgtNGZkYi1hMWQ4LTc0NTI3YzJhNGRiM30iLCJodHRwOi8vc2NoZW1hcy5ncmVhbi5pZC9jbGFpbXMvc2Vzc2lvbmluZGV4IjoiOGQ1MjllYmQtZTUzMC00ZDBkLTlmMzMtNzk4NDM0ZDEyNzgwIiwiZGs6Z292OnNhbWw6YXR0cmlidXRlOm1pdGlkX3Jpc2tfZGF0YSI6eyJyaXNrRGF0YSI6W3sicGMiOiJkZXZpY2UiLCJwdCI6Im1vZGVsIiwic3JjIjoiQXV0aGVudGljYXRvclN0YW5kYWxvbmVDb2RlQXBwIiwib2JzIjoiaVBob25lMTIsMSIsImFnZyI6bnVsbCwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImRldmljZSIsInB0IjoiamFpbGJyb2tlblN0YXR1cyIsInNyYyI6IkF1dGhlbnRpY2F0b3JTdGFuZGFsb25lQ29kZUFwcCIsIm9icyI6ImZhbHNlIiwiYWdnIjpudWxsLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoiZGV2aWNlIiwicHQiOiJhcHBJZGVudCIsInNyYyI6IkF1dGhlbnRpY2F0b3JTdGFuZGFsb25lQ29kZUFwcCIsIm9icyI6ImRrLm1pdGlkLmNvZGVhcHAuaW9zIiwiYWdnIjpudWxsLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoiZGV2aWNlIiwicHQiOiJlbnJvbGxtZW50RGF0ZVRpbWUiLCJzcmMiOiJBdXRoZW50aWNhdG9yU3RhbmRhbG9uZUNvZGVBcHAiLCJvYnMiOiIyMDIyLTEwLTI1VDA5OjI5OjI1LjkzMDExMloiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJpZGVudGl0eSIsInB0IjoicHJldmlvdXNBdXRoZW50aWNhdGlvbiIsInNyYyI6IkF1dGhlbnRpY2F0b3JFbWJlZGRlZENvZGVBcHAiLCJvYnMiOiIyMDIyLTEwLTI1VDEyOjIwOjUwLjA4NjQ4MVoiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJpZGVudGl0eSIsInB0IjoiYXV0aGVudGljYXRvclVzYWdlRnJlcXVlbmN5Iiwic3JjIjoiQXV0aGVudGljYXRvckVtYmVkZGVkQ29kZUFwcCIsIm9icyI6IkEtMTQxMi02ODY1LTIzOTgiLCJhZ2ciOiIzLzgiLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoiZGV2aWNlIiwicHQiOiJkZXZpY2VJZCIsInNyYyI6IkNsaWVudCIsIm9icyI6ImFiZjE4YjQxLTRiYzMtNDk4Yy1hZGI0LTMzMjhlYmVkMTk2YyIsImFnZyI6IjEvOCIsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJkZXZpY2UiLCJwdCI6InVzZXItYWdlbnQiLCJzcmMiOiJBdXRoZW50aWNhdG9yRW1iZWRkZWRDb2RlQXBwIiwib2JzIjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwOC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYWdnIjoiMS84IiwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImRldmljZSIsInB0IjoiYXBwVmVyc2lvbiIsInNyYyI6IkF1dGhlbnRpY2F0b3JTdGFuZGFsb25lQ29kZUFwcCIsIm9icyI6IjIuMy41ICgxKSIsImFnZyI6bnVsbCwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImRldmljZSIsInB0Ijoic2Vzc2lvbkRpZE92ZXJ3cml0ZSIsInNyYyI6IkF1dGhlbnRpY2F0b3JFbWJlZGRlZENvZGVBcHAiLCJvYnMiOiJmYWxzZSIsImFnZyI6bnVsbCwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImRldmljZSIsInB0Ijoib3NOYW1lIiwic3JjIjoiQXV0aGVudGljYXRvclN0YW5kYWxvbmVDb2RlQXBwIiwib2JzIjoiaU9TIiwiYWdnIjpudWxsLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoiaWRlbnRpdHkiLCJwdCI6ImZhaWxlZEF0dGVtcHRzIiwic3JjIjoiQXV0aGVudGljYXRvckVtYmVkZGVkQ29kZUFwcCIsIm9icyI6IjAiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJpZGVudGl0eSIsInB0IjoicmVnaXN0cmF0aW9uRGF0ZVRpbWUiLCJzcmMiOiJDb3JlIiwib2JzIjoiMjAyMi0xMC0yNVQwOToyOToyNS43OTA5NVoiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJkZXZpY2UiLCJwdCI6Im9zVmVyc2lvbiIsInNyYyI6IkF1dGhlbnRpY2F0b3JTdGFuZGFsb25lQ29kZUFwcCIsIm9icyI6IjE2LjEuMSIsImFnZyI6bnVsbCwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImxvY2F0aW9uIiwicHQiOiJnZW8taXAiLCJzcmMiOiJDbGllbnQiLCJvYnMiOiI1NS44MTY3LDEyLjQ2NjciLCJhZ2ciOiI3LzgiLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoiZGV2aWNlIiwicHQiOiJ3aW5kb3ctc2l6ZSIsInNyYyI6IkF1dGhlbnRpY2F0b3JFbWJlZGRlZENvZGVBcHAiLCJvYnMiOiIzNDl4MzY5IiwiYWdnIjoiOC84IiwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImRldmljZSIsInB0Ijoic2RrVmVyc2lvbiIsInNyYyI6IkF1dGhlbnRpY2F0b3JTdGFuZGFsb25lQ29kZUFwcCIsIm9icyI6IjIuMy41IiwiYWdnIjpudWxsLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoiZGV2aWNlIiwicHQiOiJhcHBIYXNoIiwic3JjIjoiQXV0aGVudGljYXRvclN0YW5kYWxvbmVDb2RlQXBwIiwib2JzIjoiZGsubWl0aWQuY29kZWFwcC5pb3MiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJkZXZpY2UiLCJwdCI6ImRldmljZVR5cGUiLCJzcmMiOiJBdXRoZW50aWNhdG9yU3RhbmRhbG9uZUNvZGVBcHAiLCJvYnMiOiJpUGhvbmUiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJuZXR3b3JrIiwicHQiOiJpcCIsInNyYyI6IkNsaWVudCIsIm9icyI6IjYyLjI0My4yNDQuMTU0IiwiYWdnIjoiNy84IiwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6Im5ldHdvcmsiLCJwdCI6ImlwIiwic3JjIjoiQXV0aGVudGljYXRvclN0YW5kYWxvbmVDb2RlQXBwIiwib2JzIjoiNzcuMjQxLjEyOC4xOTMiLCJhZ2ciOiIxLzgiLCJ0cyI6IjE2Njk4MTkwOTkifSx7InBjIjoibG9jYXRpb24iLCJwdCI6Imdlby1pcCIsInNyYyI6IkF1dGhlbnRpY2F0b3JTdGFuZGFsb25lQ29kZUFwcCIsIm9icyI6IjU1LjY3ODYsMTIuNTU4OSIsImFnZyI6IjEvOCIsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJuZXR3b3JrIiwicHQiOiJpcCIsInNyYyI6IkF1dGhlbnRpY2F0b3JFbWJlZGRlZENvZGVBcHAiLCJvYnMiOiI2Mi4yNDMuMjQ0LjE1NCIsImFnZyI6IjcvOCIsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJkZXZpY2UiLCJwdCI6ImxvY2FsZSIsInNyYyI6IkF1dGhlbnRpY2F0b3JFbWJlZGRlZENvZGVBcHAiLCJvYnMiOiJlbi1VUyxlbjtxPTAuOSxkYTtxPTAuOCxuYjtxPTAuNyxzdjtxPTAuNixmcjtxPTAuNSxtdDtxPTAuNCIsImFnZyI6bnVsbCwidHMiOiIxNjY5ODE5MDk5In0seyJwYyI6ImRldmljZSIsInB0IjoiZGV2aWNlaWRhcHAiLCJzcmMiOiJDbGllbnQiLCJvYnMiOiJhYmYxOGI0MS00YmMzLTQ5OGMtYWRiNC0zMzI4ZWJlZDE5NmMiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9LHsicGMiOiJkZXZpY2UiLCJwdCI6ImRldmljZU5hbWUiLCJzcmMiOiJBdXRoZW50aWNhdG9yU3RhbmRhbG9uZUNvZGVBcHAiLCJvYnMiOiJpUGhvbmUiLCJhZ2ciOm51bGwsInRzIjoiMTY2OTgxOTA5OSJ9XX0sImRrOmdvdjpzYW1sOmF0dHJpYnV0ZTpDdnJOdW1iZXJJZGVudGlmaWVyIjoiOTU0MzU0MDIiLCJ1cm46b2lkOjIuNS40LjEwIjoiVGVzdG9yZ2FuaXNhdGlvbiBuci4gOTU0MzU0MDIiLCJkazpnb3Y6c2FtbDphdHRyaWJ1dGU6TG9BIjoiU1VCU1RBTlRJQUwiLCJkazpnb3Y6c2FtbDphdHRyaWJ1dGU6SUFMIjoiU1VCU1RBTlRJQUwiLCJkazpnb3Y6c2FtbDphdHRyaWJ1dGU6QUFMIjoiU1VCU1RBTlRJQUwiLCJkazpnb3Y6c2FtbDphdHRyaWJ1dGU6RkFMIjoiSElHSCIsImRrOmdvdjpzYW1sOmF0dHJpYnV0ZTpVVUlEIjoiZDZlMjBlNTQtYjM5MS00ZjFmLTg3MmItOWI4ZTFiYzg0MDcxIiwiYmlydGhkYXRlIjoiMTk3MC0wMS0wMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2RhdGVvZmJpcnRoIjoiMTk3MC0wMS0wMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2FnZSI6IjUyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkVuIE1lZGFyYmVqZGVyIiwiZGs6Z292OnNhbWw6YXR0cmlidXRlOlJlZlRleHRIZWFkZXIiOiJMb2cgb24gYXQgQ3JpaXB0byIsImRrOmdvdjpzYW1sOmF0dHJpYnV0ZTpSZWZUZXh0Qm9keSI6IlB1cHBldGVlciAoSmF2YXNjcmlwdCBhcHApIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvY291bnRyeSI6IkRLIiwiaWF0IjoxNjY5ODE5MTAxLCJuYmYiOjE2Njk4MTkxMDEsImV4cCI6MTY2OTgzNzA5OX0.Tqw-gKLrKVPP6_XOnHX0eIV-gDwr2RRdnCUgMRpKrCzjnFc37rvIVwg2G-6G7-k71js42Ey60EDcTpN4Aa37fQ7oD6uuM7d-ommTMLhyCD8j6aQHSi1kePFRZZdttiYC1UuSxP7kprUNBt4YuQYKRUPpbS5Mi87T-9cCJu-MVXPAU6TTVLLjqiG1Zu1VxpSJOBqX0TmoNOsR5PX8VhPdiai5ormKagyknHsn7J5eN58oKrE9iAFY2_Wknu92xzNKjAsmevAhuHp06R_EFpSF5LOQTovIpl0JM2okwt_Cz9Skr2t49Iw3vkB8ARaNrFYBT6dXOC-dQoYKZyBkLqApiA');
export const NEMID_POCES = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkIxMTQ5QkM4MEMyNUY4MTZEODVCMjdFMTMwNUYzRkQ1NTMwNkUzRUYifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi05YjU3NWI2OC0yN2Q5LTQ2YWEtOWI2YS1iN2ZkNDY5MWEzMGYiLCJpZGVudGl0eXNjaGVtZSI6ImRrbmVtaWQiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOmRrOm5lbWlkOnBvY2VzIiwiYXV0aGVudGljYXRpb25tZXRob2QiOiJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YWM6Y2xhc3NlczpTb2Z0d2FyZVBLSSIsImF1dGhlbnRpY2F0aW9uaW5zdGFudCI6IjIwMjItMTEtMzBUMTM6NDg6MTEuMzE5WiIsIm5hbWVpZGVudGlmaWVyIjoiMmVjODFiZjllM2YzNGQ2MGJjMzY2YzRhZGYyMzNmZWQiLCJzdWIiOiJ7MmVjODFiZjktZTNmMy00ZDYwLWJjMzYtNmM0YWRmMjMzZmVkfSIsInNlc3Npb25pbmRleCI6IjA2ZjQ0ZGIwLWQ1ZDUtNGE1OC05Mjk1LTRlNmI4YjRkYmViYiIsInBpZE51bWJlcklkZW50aWZpZXIiOiI5MjA4LTIwMDItMi02MTA0OTU1MDgwNDIiLCJpc1lvdXRoQ2VydCI6ImZhbHNlIiwiY29tcGFueVNpZ25hdG9yeSI6ImZhbHNlIiwiY3ByTnVtYmVySWRlbnRpZmllciI6IjI4MDY4MzA4OTciLCJuYW1lIjoiVG9raSBLcmlzdG9mZmVyc2VuIiwiY291bnRyeSI6IkRLIiwiMi41LjQuNS4xIjoiUElEOjkyMDgtMjAwMi0yLTYxMDQ5NTUwODA0MiIsIjIuNS40LjUiOiI1RjlFNDAzOSIsIjIuNS4yOS4yOSI6IkNOPVRSVVNUMjQwOCBTeXN0ZW10ZXN0IFhYWElWIENBLCBPPVRSVVNUMjQwOCwgQz1ESyIsImlhdCI6MTY2OTgxNjA5MSwibmJmIjoxNjY5ODE2MDkxLCJleHAiOjE2Njk4MTcyOTF9.UwDHWtBlWmzoNjLONMol7s4G8OcgEWYkwihS9wGVNmRdv5gIC6c4JKq_GtysruyCj7G1SgoTjkGaiOHG3O_YAZnQWsI_dUBVxIG8NQfycOu7Nc1RHCCnjebUMxv0Pl2U1UFfCXQLXPE4rs91AYHuvAM7Os3N2Ckiip8jFvlDq2QhE9iTLY8H-fUoPab6qkzkJTfP6j42sJH_9CxAlJvbobkzwd9Uia-8L_95i7nCYIA5KGcPU3znNTOU9_3kXSi8Q_2m7v8IYFH0AjZWJc2Zg7zgbs5LykEuNM3UgD-mnE5Ov68Zq5RwbJmiOulbjABMx7W55a1A28lSCYBbDeJWsw');
export const SEBANKID = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkIxMTQ5QkM4MEMyNUY4MTZEODVCMjdFMTMwNUYzRkQ1NTMwNkUzRUYifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi05YThhOThmOS01NTc5LTRhMTAtYmNmMi1mMDc1MTA5OGQ4ODAiLCJpZGVudGl0eXNjaGVtZSI6InNlYmFua2lkIiwiYXV0aGVudGljYXRpb250eXBlIjoidXJuOmdybjphdXRobjpzZTpiYW5raWQ6c2FtZS1kZXZpY2UiLCJhdXRoZW50aWNhdGlvbm1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlNvZnR3YXJlUEtJIiwiYXV0aGVudGljYXRpb25pbnN0YW50IjoiMjAyMi0xMS0zMFQxMzo0OTo1NC45MjNaIiwibmFtZWlkZW50aWZpZXIiOiI0YTUyZDg2ZGNjZTU0NGM5OTk5MWZhNGZmNzlmM2VhNyIsInN1YiI6Ins0YTUyZDg2ZC1jY2U1LTQ0YzktOTk5MS1mYTRmZjc5ZjNlYTd9Iiwic2Vzc2lvbmluZGV4IjoiMDZmNDRkYjAtZDVkNS00YTU4LTkyOTUtNGU2YjhiNGRiZWJiIiwic3NuIjoiMTk4MjA4MjczNTg0IiwibmFtZSI6IkxpbGx5IEJlcmdxdmlzdCIsImdpdmVubmFtZSI6IkxpbGx5IiwiZ2l2ZW5fbmFtZSI6IkxpbGx5Iiwic3VybmFtZSI6IkJlcmdxdmlzdCIsImZhbWlseV9uYW1lIjoiQmVyZ3F2aXN0IiwiaXBhZGRyZXNzIjoiODAuNzEuMTQyLjk5IiwiY291bnRyeSI6IlNFIiwiaWF0IjoxNjY5ODE2MTk0LCJuYmYiOjE2Njk4MTYxOTQsImV4cCI6MTY2OTgxNzM5NH0.l2aaDv219wIhicWXX5ZUfYiVnc8wqAJ4iA5pZtw8Ab6px_IYaSoLuSshrf2RGbFhCJeiUj7qoMNuTNqacQQ_oE3O7-3qtNC_KLoe8qaKtbHSYOgk4IUXwkdbXko6b9U1NWa1FuAmlppdNRMwXaJ4eat5AABDMkJ1_ar5h8Vf0topAOroG2RUfvlwhjJw0PjSbsw-FQ9-khTwEuXuMgcWvf-5ZerBK4vtNcAvnWQzLvMrtA_NXqttubFP9FTkoytfUfJVhRO9hf8CVSRceXeNMbJzQsaJKMXMSMeJscf5e63J_RY-IQNN__JWMB6O3cbGnxoogBuKiN6aSjB1Ly3b5w');

export const NOBANKID = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkIxMTQ5QkM4MEMyNUY4MTZEODVCMjdFMTMwNUYzRkQ1NTMwNkUzRUYifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi0yM2MwMjhjMi03Y2VhLTQ1Y2MtYjlkNi0xM2UwYWY4ZmNhNGYiLCJpZGVudGl0eXNjaGVtZSI6Im5vYmFua2lkLW9pZGMiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOm5vOmJhbmtpZCIsImF1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6U29mdHdhcmVQS0kiLCJhdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDEzOjUxOjEyLjkxNloiLCJuYW1laWRlbnRpZmllciI6ImMwMTI2YjIwNDdjMDRlNzM5YzA0ZDZjZjEwZGEwZTBlIiwic3ViIjoie2MwMTI2YjIwLTQ3YzAtNGU3My05YzA0LWQ2Y2YxMGRhMGUwZX0iLCJzZXNzaW9uaW5kZXgiOiIwNmY0NGRiMC1kNWQ1LTRhNTgtOTI5NS00ZTZiOGI0ZGJlYmIiLCJ1bmlxdWV1c2VyaWQiOiI5NTc4LTYwMDAtNC03ODMwNjYiLCJjZXJ0aXNzdWVyIjoiQ049QmFua0lEIC0gVGVzdEJhbmsxIC0gQmFuayBDQSAzLE9VPTEyMzQ1Njc4OSxPPVRlc3RCYW5rMSBBUyxDPU5PO09yZ2luYXRvcklkPTk5ODA7T3JpZ2luYXRvck5hbWU9QklOQVM7T3JpZ2luYXRvcklkPTk5ODAiLCJjZXJ0c3ViamVjdCI6IkNOPWFzZGFzZFxcLCB0YXNkYXNkLE89VGVzdEJhbmsxIEFTLEM9Tk8sU0VSSUFMTlVNQkVSPTk1NzgtNjAwMC00LTc4MzA2NiIsImFkZHJlc3MiOm51bGwsInN0cmVldGFkZHJlc3MiOiJudWxsIiwiYmlydGhkYXRlIjoiMTk1Ny0wMS0xOCIsImRhdGVvZmJpcnRoIjoiMTk1Ny0wMS0xOCIsImZhbWlseV9uYW1lIjoiYXNkYXNkIiwic3VybmFtZSI6ImFzZGFzZCIsImdpdmVuX25hbWUiOiJ0YXNkYXNkIiwiZ2l2ZW5uYW1lIjoidGFzZGFzZCIsIm5hbWUiOiJ0YXNkYXNkIGFzZGFzZCIsImNvdW50cnkiOiJOTyIsImlhdCI6MTY2OTgxNjI3MiwibmJmIjoxNjY5ODE2MjcyLCJleHAiOjE2Njk4MTc0NzJ9.Jk1UJais-gsx6lX4Y35Q_RHViVmqiDgFq999fdEXSBf5_mXEBd5XAuAdTYywFzTDrE9_Djc5jhpssuMfMuYSjgXfbCuN2YONWpM2U1TknjrpyqQqPrv80CUoPPHqZL_Z561VhwJ3450gAz_9wViXVpmZj89DER6BrirLMrZvAoXHWws3mNYW8hUn-86sYfVJKbTpx1DdWEIhx6zxBxgbfwfsNpdL7UT1YlJMalrSZ9e5-3uVkQtnY0-E-0r720uIzoykmMx1KfhT9ZTECZPkNvgQgLXO83V0SnUQ_wN5Bh__PkacxvARpswg91NGHSBZovlNTQXGyTyr7eGkEmI0yA');
export const NOBANKID_SSN = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkIxMTQ5QkM4MEMyNUY4MTZEODVCMjdFMTMwNUYzRkQ1NTMwNkUzRUYifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi1kMmJmZjI3NC0zYWUxLTQxZDItOTExYi1kYTdmZDIzYWQ2OTAiLCJpZGVudGl0eXNjaGVtZSI6Im5vYmFua2lkLW9pZGMiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOm5vOmJhbmtpZCIsImF1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6U29mdHdhcmVQS0kiLCJhdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDEzOjUyOjMzLjA3OFoiLCJuYW1laWRlbnRpZmllciI6ImMwMTI2YjIwNDdjMDRlNzM5YzA0ZDZjZjEwZGEwZTBlIiwic3ViIjoie2MwMTI2YjIwLTQ3YzAtNGU3My05YzA0LWQ2Y2YxMGRhMGUwZX0iLCJzZXNzaW9uaW5kZXgiOiIwNmY0NGRiMC1kNWQ1LTRhNTgtOTI5NS00ZTZiOGI0ZGJlYmIiLCJ1bmlxdWV1c2VyaWQiOiI5NTc4LTYwMDAtNC03ODMwNjYiLCJjZXJ0aXNzdWVyIjoiQ049QmFua0lEIC0gVGVzdEJhbmsxIC0gQmFuayBDQSAzLE9VPTEyMzQ1Njc4OSxPPVRlc3RCYW5rMSBBUyxDPU5PO09yZ2luYXRvcklkPTk5ODA7T3JpZ2luYXRvck5hbWU9QklOQVM7T3JpZ2luYXRvcklkPTk5ODAiLCJjZXJ0c3ViamVjdCI6IkNOPWFzZGFzZFxcLCB0YXNkYXNkLE89VGVzdEJhbmsxIEFTLEM9Tk8sU0VSSUFMTlVNQkVSPTk1NzgtNjAwMC00LTc4MzA2NiIsImFkZHJlc3MiOm51bGwsInN0cmVldGFkZHJlc3MiOiJudWxsIiwiYmlydGhkYXRlIjoiMTk1Ny0wMS0xOCIsImRhdGVvZmJpcnRoIjoiMTk1Ny0wMS0xOCIsInNvY2lhbG5vIjoiMTgwMTU3MTg5NjYiLCJmYW1pbHlfbmFtZSI6ImFzZGFzZCIsInN1cm5hbWUiOiJhc2Rhc2QiLCJnaXZlbl9uYW1lIjoidGFzZGFzZCIsImdpdmVubmFtZSI6InRhc2Rhc2QiLCJuYW1lIjoidGFzZGFzZCBhc2Rhc2QiLCJjb3VudHJ5IjoiTk8iLCJpYXQiOjE2Njk4MTYzNTMsIm5iZiI6MTY2OTgxNjM1MywiZXhwIjoxNjY5ODE3NTUzfQ.YLmkXzacid6tAngw96lmn61OAEtCSI_CiJu1A2yyRn5Da0zt-eEbxFbmS1FG-OxmtwujoyNFBGxKCJ3yOChL4wuiwb7BYP2cnAcoZwoY0uW7IxbNnD4W_ju-RRZ9dGQ-hnncpzs5p6RNTq2QDBq1LpWIh8GwCxCMktpk4O0EKBLJAi11sowKGrpJCSABWIP9Iv48RG399ADPUCineGd_-_FgGuHvwhhJspTaUN73g0O_gXQNCLVaVlt6yBLMfBhOeByINSoifM5ka7_7P_eA2bJSTzblqynR2iDybd8wkOF6A_jovGWnozAUDUQmH_YQe3e7OsXjKw7pzhSPNPyn8A');
export const NOBANKID_ADDRESS = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkIxMTQ5QkM4MEMyNUY4MTZEODVCMjdFMTMwNUYzRkQ1NTMwNkUzRUYifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi1lMjVmYTgxYS04OTZhLTQ3MTctYjU3NS1iYjM5ZGI1MDkwN2IiLCJpZGVudGl0eXNjaGVtZSI6Im5vYmFua2lkLW9pZGMiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOm5vOmJhbmtpZCIsImF1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6U29mdHdhcmVQS0kiLCJhdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDEzOjUzOjE1LjQ0MloiLCJuYW1laWRlbnRpZmllciI6ImMwMTI2YjIwNDdjMDRlNzM5YzA0ZDZjZjEwZGEwZTBlIiwic3ViIjoie2MwMTI2YjIwLTQ3YzAtNGU3My05YzA0LWQ2Y2YxMGRhMGUwZX0iLCJzZXNzaW9uaW5kZXgiOiIwNmY0NGRiMC1kNWQ1LTRhNTgtOTI5NS00ZTZiOGI0ZGJlYmIiLCJ1bmlxdWV1c2VyaWQiOiI5NTc4LTYwMDAtNC03ODMwNjYiLCJjZXJ0aXNzdWVyIjoiQ049QmFua0lEIC0gVGVzdEJhbmsxIC0gQmFuayBDQSAzLE9VPTEyMzQ1Njc4OSxPPVRlc3RCYW5rMSBBUyxDPU5PO09yZ2luYXRvcklkPTk5ODA7T3JpZ2luYXRvck5hbWU9QklOQVM7T3JpZ2luYXRvcklkPTk5ODAiLCJjZXJ0c3ViamVjdCI6IkNOPWFzZGFzZFxcLCB0YXNkYXNkLE89VGVzdEJhbmsxIEFTLEM9Tk8sU0VSSUFMTlVNQkVSPTk1NzgtNjAwMC00LTc4MzA2NiIsImFkZHJlc3MiOnsic3RyZWV0X2FkZHJlc3MiOiJCeWdhZGVuIDE2LCAyLnR2IiwicG9zdGFsX2NvZGUiOiI1MTMyIiwibG9jYWxpdHkiOiJNb2xkZSIsImZvcm1hdHRlZCI6IkJ5Z2FkZW4gMTYsIDIudHZcbjUxMzIgTW9sZGUifSwic3RyZWV0YWRkcmVzcyI6IntcInN0cmVldF9hZGRyZXNzXCI6XCJCeWdhZGVuIDE2LCAyLnR2XCIsXCJwb3N0YWxfY29kZVwiOlwiNTEzMlwiLFwibG9jYWxpdHlcIjpcIk1vbGRlXCIsXCJmb3JtYXR0ZWRcIjpcIkJ5Z2FkZW4gMTYsIDIudHZcXG41MTMyIE1vbGRlXCJ9IiwiYmlydGhkYXRlIjoiMTk1Ny0wMS0xOCIsImRhdGVvZmJpcnRoIjoiMTk1Ny0wMS0xOCIsImZhbWlseV9uYW1lIjoiYXNkYXNkIiwic3VybmFtZSI6ImFzZGFzZCIsImdpdmVuX25hbWUiOiJ0YXNkYXNkIiwiZ2l2ZW5uYW1lIjoidGFzZGFzZCIsIm5hbWUiOiJ0YXNkYXNkIGFzZGFzZCIsImNvdW50cnkiOiJOTyIsImlhdCI6MTY2OTgxNjM5NSwibmJmIjoxNjY5ODE2Mzk1LCJleHAiOjE2Njk4MTc1OTV9.M9LDEIOXe3ZmoGos9wqX9c7AWjvfeKUVm5EkShkZZh0UEFaFpWOVDUPygHeVliid8rk0sX2a_iYHHqhUyW11da1q-uJIQoNamxmZJ0Ew1oCmUn_0XPb-mB3IbKneo4laUqcybeIIZtiyzSvxOW81JuFHWvF2kG1tJ2_2K54jVZ3E0GHI9eO0JSz9kw4IJMtAqwAtzRzh5eCOe0w6yjuDMfYbYJDy-OEzL5WWZoHQLfmyt6HU8NaQNuhKlawa6x1hSQetkjTrVPnqahSc98Pzuc11kjSJeju3c7EgXXcYAh95bdfIiAgpQtoKlHv_MIorVHfYmNj3flVXWmAOaZ_-rQ');

export const FTN_BANKID = toSample('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkIxMTQ5QkM4MEMyNUY4MTZEODVCMjdFMTMwNUYzRkQ1NTMwNkUzRUYifQ.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuY3JpaXB0by5pZCIsImF1ZCI6InVybjpjcmlpcHRvOnNhbXBsZXM6Y3JpaXB0by1qd3Qtdmlld2VyIiwibm9uY2UiOiJlY25vbi1lMmE5ZmUyOS01NTA0LTRiNDctOWRhZi1mN2MwOTdmNGU0ZDIiLCJpZGVudGl0eXNjaGVtZSI6ImZpdHVwYXMiLCJhdXRoZW50aWNhdGlvbnR5cGUiOiJ1cm46Z3JuOmF1dGhuOmZpOmJhbmstaWQiLCJhdXRoZW50aWNhdGlvbm1ldGhvZCI6Imh0dHBzOi8vdHVubmlzdHVzLXBwLnRlbGlhLmZpL3Vhcy9zYW1sMi9uYW1lcy9hYy9vaWRjLmFrdGlhLjEiLCJhdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDIyLTExLTMwVDEzOjU1OjE3LjI4OVoiLCJuYW1laWRlbnRpZmllciI6IjViODEzMTVjM2JhOTQ2ZjJhNjgzMDFjMWNmOGIxOTljIiwic3ViIjoiezViODEzMTVjLTNiYTktNDZmMi1hNjgzLTAxYzFjZjhiMTk5Y30iLCJzZXNzaW9uaW5kZXgiOiIwNmY0NGRiMC1kNWQ1LTRhNTgtOTI5NS00ZTZiOGI0ZGJlYmIiLCJuYW1lIjoiVGVybyBUZXN0aSDDhHlyw6Rtw7YiLCJjb3VudHJ5IjoiRkkiLCJnaXZlbm5hbWUiOiJUZXJvIFRlc3RpIiwiZ2l2ZW5fbmFtZSI6IlRlcm8gVGVzdGkiLCJzdXJuYW1lIjoiw4R5csOkbcO2IiwiZmFtaWx5X25hbWUiOiLDhHlyw6Rtw7YiLCJkYXRlb2ZiaXJ0aCI6IjE5NzAtMDEtMDEiLCJiaXJ0aGRhdGUiOiIxOTcwLTAxLTAxIiwiZ2VuZGVyIjoiTWFsZSIsImhldHUiOiIwMTAxNzAtOTk5UiIsImlhdCI6MTY2OTgxNjUxNywibmJmIjoxNjY5ODE2NTE3LCJleHAiOjE2Njk4MTc3MTd9.KwPGVkW1VPCrZ3WPl4_w0ZiMrEASCKjE9DZ1cXEAjUWzm84b_bwSsDCIJVzg8SPvkk8y6s4l3HKa-Tht9UwRBsYlpxHRLmr7sk65VfJ38aGkLmu2zk36E-Z0eUPW_C5ueV-2_LjYW1nAxwkqjxS4uwtK7yZFFYA5nyfak--dRi7lPWuhv2i6SiPobfCDsO6f6jznat7VI8tX_kMwsJldUpRdBUGKXA1cUr0F7dUwh9BjxVhfhp0PhmAwtuG9rBQp45rSNapJeSlWAq6hPCGGuLQqciKZXVQpckxemHBEY2_uRkCa_Vw1ERjhA_tyTegfjhHR957pJ-ewVo-q0GR7AQ');