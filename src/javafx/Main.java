package javafx;

import java.io.File;
import java.net.URL;

import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.input.KeyEvent;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class Main extends Application {

  @Override
  public void start(Stage stage) throws Exception {
    // Create a WebView
    WebView browser = new WebView();

    // Get WebEngine via WebView
    WebEngine webEngine = browser.getEngine();

    File file = new File("web/platform.html");
    URL url = file.toURI().toURL();

    // Load page
    webEngine.load(url.toString());
    
  

    Scene scene = new Scene(browser);

    scene.addEventHandler(KeyEvent.KEY_RELEASED, new EventHandler<KeyEvent>() {

      @Override
      public void handle(KeyEvent event) {
        //webEngine.executeScript("app.reverseMessage()");
        
      }
      
    });
    
    stage.setTitle("JavaFX WebView");
    stage.setScene(scene);
    stage.setFullScreen(true);

    stage.show();
  }

  public static void main(String... args) {
    
      launch(args);
    
  }

}
