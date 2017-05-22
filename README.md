# Protractor-TypeScript-PageObjects

<h1><span style="color: #993300;"><strong>How to Setup and Run?</strong></span></h1>
<h2><strong>Prerequisites</strong></h2>
<p class="ng-scope"><span style="text-decoration: underline;"><strong>Node.js</strong></span></p>
<p class="ng-scope">Protractor is a <a href="http://nodejs.org/">Node.js</a> program. To run Protractor, you will need to have Node.js installed.</p>
<div><span style="text-decoration: underline;"><strong>Installing Protractor</strong></span></div>
<p class="ng-scope">Use npm to install Protractor globally. Open command prompt and run the following command:</p>
<pre class="ng-scope"><code>npm install -g protractor<br /><br /><span style="text-decoration: underline;"><strong>Installing TypeScript</strong></span><br />npm install -g typescript<br /><br /></code></pre>
<p class="ng-scope"><span style="text-decoration: underline;"><strong>Installing and Starting Server</strong></span></p>
<p class="ng-scope">To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor.</p>
<ol class="ng-scope">
<li>
<p>Run the update command: <code>webdriver-manager update</code> This will install the server and ChromeDriver.</p>
</li>
<li>
<p>Run the start command: <code>webdriver-manager start</code> This will start the server.</p>
</li>
</ol>
<pre class="ng-scope"><span style="text-decoration: underline;"><strong><code>Installing Jasmine Framework<br /></code></strong></span></pre>
<div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell">#</span>&nbsp;Local&nbsp;installation:&nbsp;</span></span></div>
<div class="line"><span class="source shell">npm&nbsp;install&nbsp;--save-dev&nbsp;jasmine</span></div>
<div class="line"><span class="source shell">&nbsp;</span></div>
<div class="line"><span class="source shell"><span class="comment line number-sign shell"><span class="punctuation definition comment shell">#</span>&nbsp;Global&nbsp;installation&nbsp;</span></span></div>
<div class="line"><span class="source shell">npm&nbsp;install&nbsp;-g&nbsp;jasmine</span></div>
<div class="line">&nbsp;</div>
<div class="line"><span style="text-decoration: underline;"><strong><span class="source shell">Finally Setting up your protractor&nbsp;will involve the following steps:</span></strong></span></div>
<div class="line"><span class="source shell">Run the following commands in your project folder :</span></div>
<div class="line">
<ul>
<li>npm init -f // will create default package.json stating its nodejs project</li>
<li>tsc --init&nbsp; // will create tsconfig.json stating its typescript project</li>
</ul>
<p>&nbsp;Install typings and dev dependencies-</p>
<ul>
<li>npm install --save-dev protractor // this will install protractor as a dev dependency</li>
<li>npm install --save-dev typescript // this will install typescript as a dev dependency</li>
<li>npm install --save-dev @types/jasmine // jasmine typings</li>
<li>npm install --save-dev @types/node&nbsp;&nbsp;&nbsp; // node typings</li>
</ul>
<ul>
<li>At this point you have setup your basic&nbsp;protractor-typescriptproject and you can see all the typings and dependencies in&nbsp;json. Now you are good to write your typed scripts :).</li>
<li>Now compile your scripts by running -</li>
</ul>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; tsc</strong>&nbsp;&nbsp;</p>
<ul>
<li>After successfull compilation all your javascript files would be generated.</li>
<li>Then run protractor with the following command</li>
</ul>
<span class="source shell">protractor conf.js</span></div>
<pre class="ng-scope"><span style="text-decoration: underline;"><strong><code>&nbsp;</code></strong></span></pre>
<pre class="ng-scope">Angular application used for demo: http://juliemr.github.io/protractor-demo/</pre>
