<template>
  <div>
    <button @click="copyComponent">Copy Component to Slidev</button>
    <ParagraphComponent v-for="n in 4" title="Title" content="Hello World"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  </div>
</template>

<script>
async function convertToSlidev() {
  // Convert paragraphs to Slidev markdown format
  // Get the component name and sent it to slides.md (i.e) <ComponentName/>
  const markdownContent = (`## <ParagraphComponent/>`).join("\n\n---\n\n");

  // Send the data to Slidev API
  await fetch('http://localhost:3001/save-slide', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ markdown: markdownContent }),
  });
 }
</script>
