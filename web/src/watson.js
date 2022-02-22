let watson = `<script>
window.watsonAssistantChatOptions = {
    integrationID: "781bc0dc-68a2-481e-98f8-e39b4fdcbec3", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "b27f6289-6da0-4985-82b3-1894a7c98206", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
  document.head.appendChild(t);
});
</script>`

export default watson;