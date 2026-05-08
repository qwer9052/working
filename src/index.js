export default {
  async fetch(request, env) {
    const auth = request.headers.get("Authorization");
    const expected = "Basic " + btoa(`${env.USERNAME}:${env.PASSWORD}`);

    if (auth !== expected) {
      return new Response("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="working", charset="UTF-8"' },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
